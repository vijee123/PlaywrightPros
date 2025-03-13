import dotenv from 'dotenv';  // Import the dotenv package
dotenv.config();  // Load the variables from .env into process.env


export const CONFIG  = {
    BASE_URL: process.env.BASE_URL || 'https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login',
    USERNAME: process.env.MYNAME   || 'Playwright@gmail.com',
    PASSWORD: process.env.PASSWORD || 'March@2025'
 };