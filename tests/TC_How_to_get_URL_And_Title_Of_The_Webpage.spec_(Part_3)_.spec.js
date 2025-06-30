// Last_Practice_Date :- 29/10/2024

// Part_3

const { test, expect } = require('@playwright/test');

test('@Part_3 Home Page', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://www.amazon.in/');

    // Get and log the page title
    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    // Assert that the page title is as expected
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    // Get and log the page URL
    const pageURL = page.url();
    console.log('Page URL is:', pageURL);

    // Assert that the page URL is correct
    await expect(page).toHaveURL('https://www.amazon.in/');

    // Close the page
    await page.close();
});
