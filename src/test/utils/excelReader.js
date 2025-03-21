import * as XLSX from 'xlsx';
import path from 'path';

// Function to read data from a specific sheet
export function readExcelSheet(sheetName) {
    const filePath = path.resolve(__dirname, '../../../test-data/excelTestData.xlsx'); 
    const workbook = XLSX.readFile(filePath);

    console.log("Attempting to read Excel from:", filePath); 
    
    // Get the required sheet
    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Sheet "${sheetName}" not found in the Excel file.`);
    }

    // Convert sheet data to JSON format
    return XLSX.utils.sheet_to_json(worksheet);
}
