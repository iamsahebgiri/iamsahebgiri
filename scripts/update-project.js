import { Glob } from "bun";

const glob = new Glob("../src/content/projects/*.json");
// const glob = new Glob("./*.json");

for await (const filePath of glob.scan(".")) {
  const content = await Bun.file(filePath).json();
  //  curl -s "https://api.github.com/repos/iamsahebgiri/soundsky" | jq "{ created_at: .created_at, updated_at: .updated_at }"
  const repo = filePath.split("/").pop().replace(".json", "");
  const res = await fetch(`https://api.github.com/repos/iamsahebgiri/${repo}`, {
    headers: {
      Accept: "application/vnd.github.v3.raw",
    },
  });
  if (res.status !== 200) {
    console.error(`Failed to fetch repo data for ${repo}: ${res.statusText}`);
    continue;
  }
  const repoData = await res.json();

  console.log(repoData.created_at, repoData.updated_at);
  Bun.write(
    filePath,
    `${JSON.stringify({
      ...content,
      created_at: repoData.created_at,
      updated_at: repoData.updated_at,
    }, null, 2)}\n`,
  );
  console.log(`Updated ${filePath} with repo data.`);
}
