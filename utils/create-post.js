const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("error: missing argument");
  console.error("usage: create-post <file_name>");
  return;
}

console.log("Started writing...");

const markdownFileName = `./_posts/${args[0]}.md`;
const folderName = `./public/assets/blog/${args[0]}`;
const content = 
`---
title: ''
excerpt: ''
coverImage: '/assets/blog/${args[0]}/cover.jpg'
date: '${new Date()}'
type: ''
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/sg.png'
ogImage:
  url: '/assets/blog/${args[0]}/cover.jpg'
---
`;

try {
  fs.appendFileSync(markdownFileName, content);
  console.log("Markdown file created.");
} catch (err) {
  console.error(err);
}

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("Asset folder created.");
  }
} catch (err) {
  console.error(err);
}

console.log("Finished!");
