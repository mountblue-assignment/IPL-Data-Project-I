const csv = require("csv-parser");
const fs = require("fs");


function generateCsvToJson(filePath, outputFilePath) {
    const result = [];
    
    fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => {
        result.push(data);
    })
    .on("end", () => {
        //we will export the eesult array to json file using writeFileSync
        
        const jsonData = JSON.stringify(result, null, 2);
        fs.writeFileSync(outputFilePath, jsonData);
        console.log("result data has exported ");
    });
}




//for deliveries data-----------
generateCsvToJson("../src/data/deliveries.csv","../src/data/deliveriesResult.json");
//for matches data ----------
generateCsvToJson("../src/data/matches.csv","../src/data/matchesResult.json");