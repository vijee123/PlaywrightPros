const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

function readCSV(filePath) {
    console.log("Attempting to read CSV file from:", filePath); 

    if (!fs.existsSync(filePath)) {
        throw new Error(`CSV file not found at: ${filePath}`);
    }

    const csvFile = fs.readFileSync(path.resolve(filePath), "utf8");
    return Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true
    }).data;
}


module.exports = { readCSV };