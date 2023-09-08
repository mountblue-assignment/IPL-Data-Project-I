const fs = require('fs'); //importing file system module

function writeDataToJsonFile(data, outputFilePath) {
     const jsonData = JSON.stringify(data, null, 2);

     fs.writeFileSync(outputFilePath, jsonData, (error) => {
          if (error) {
               console.error(error);
          }
     });
}

module.exports = writeDataToJsonFile;
