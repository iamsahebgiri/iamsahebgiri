const fs = require('fs');
const path = require('path');

const isDirectory = (fileName) => {
  return fs.lstatSync(fileName).isDirectory();
};

try {
  const cpDir = path.join(process.cwd(), 'data', 'cp');
  const folders = fs
    .readdirSync(cpDir)
    .map((dir) => {
      return path.join(cpDir, dir);
    })
    .filter(isDirectory);
  const allFiles = folders.map((folder) => {
    const files = fs.readdirSync(folder);
    
  })

  console.log(folders);
} catch (err) {
  console.log(err);
}

// const cpDir = path.join(process.cwd(), 'data', type);

// const isDirectory = (fileName) => {
//   return fs.lstatSync(fileName).isDirectory();
// };

// const folders = fs
//   .readdirSync(cpDir)
//   .map((fileName) => {
//     return path.join(cpDir, fileName);
//   })
//   .filter(isDirectory);

// console.log(folders);
// folders.forEach((folder) => {
//   const files = fs.readdirSync(path.join(cpDir, folder));
//   files.forEach((file) => {
//     allFiles.push(path.join(folder, file));
//   });
// });
