import { chromium } from 'playwright';
import path from 'path';

async function generatePDF() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Change this to the path where your Allure HTML report is located
  const allureReportPath = path.resolve('allure-report', 'index.html');
  
  // Open the Allure report in the browser
  await page.goto(`file://${allureReportPath}`);
  
  // Save the page as PDF
  await page.pdf({
    path: 'allure-report.pdf',  // The output PDF file
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
}

// Run the function
generatePDF().catch(err => console.error(err));