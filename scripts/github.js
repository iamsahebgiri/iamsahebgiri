import fetch from "node-fetch";

const USERNAME = "iamsahebgiri";
const GITHUB_API = "https://api.github.com";
const HEADERS = { Accept: "application/vnd.github.v3.raw" };

async function getRepos(username) {
  const res = await fetch(`${GITHUB_API}/users/${username}/repos?per_page=100`);
  return await res.json();
}

async function getReadme(username, repo) {
  const res = await fetch(`${GITHUB_API}/repos/${username}/${repo}/readme`, { headers: HEADERS });
  if (res.status !== 200)
    return null;
  return await res.text();
}

function extractMeta(readme) {
  const match = readme.match(/<!--([\s\S]*?)-->/);
  if (!match)
    return null;
  try {
    return JSON.parse(match[1].trim());
  }
  catch {
    return null;
  }
}

async function buildProjects() {
  const repos = await getRepos(USERNAME);

  const projectPromises = repos.map(async (repo) => {
    if (!repo.topics || !repo.topics.includes("feat-in-portfolio"))
      return null;

    const readme = await getReadme(USERNAME, repo.name);
    if (!readme)
      return null;

    const meta = extractMeta(readme);
    if (!meta)
      return null;

    return {
      id: repo.id.toString(),
      order: meta.order || 0,
      image: {
        url: meta.icon || "default.svg",
        height: meta.icon_height || "48",
        width: meta.icon_width || "48",
      },
      title: meta.title || repo.name,
      description: meta.description || repo.description || "",
      tags: meta.tags || [],
      theme: meta.theme || "blue",
      link: `https://github.com/${USERNAME}/${repo.name}`,
      status: meta.status || "active",
      featured: meta.featured || false,
    };
  });

  const projects = (await Promise.all(projectPromises)).filter(Boolean);

  console.log(JSON.stringify(projects, null, 2));
}

buildProjects();
