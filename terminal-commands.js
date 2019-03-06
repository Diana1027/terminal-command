const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => `${acc} ${file}`, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.appendFile('newFile.txt', '', err => {
    if (err) throw err;
    console.log('New File Created');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('New Folder', err => {
    if (err) throw err;
    console.log('New Folder Created');
  });
};
