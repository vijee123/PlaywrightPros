import fs from 'fs';
import Papa from 'papaparse';

function readCSV(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true
    }).data;
}

module.exports = { readCSV };

//to use in test
// const testData = readCSV(csvFilePath);

// test.describe('Data-Driven Login Tests', () => {
//   testData.forEach(({ username, password }) => {
//     test(`Login Test with username: ${username}`, async ({ page }) => {
//       await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');

//       await page.fill('input[name="email"]', username);
//       await page.fill('input[name="password"]', password);
//       await page.click('button[type="submit"]');

//       // Add your assertions here
//       await expect(page).toHaveURL(/dashboard/); // Example: Checking if user lands on dashboard
//     });
//   });