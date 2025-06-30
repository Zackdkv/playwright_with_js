
const { test, expect } = require('@playwright/test');

test('@yes Create a new estimate in Joist App', async ({ page }) => {
    // Step 1: Navigate to the login page
    await page.goto('https://pro.joistapp.com/');

 
    await page.locator("[autocomplete='username']").fill('prodinterview@joist.com');

    await page.locator("[name='password']").fill('P@ssw0rd123');
    
    await page.locator("form > button").click();

    await page.locator("//button[normalize-space()='New Estimate']").click();

    await page.locator("[class='DocumentBodyAddButton_label__8OKw+']").focus()

    await page.locator("[class='DocumentBodyAddButton_label__8OKw+']").click();

    await page.locator("[placeholder='Description']").fill("Rohan")

    const input = page.locator("[class='LineItemEditHeader_rateValue__DfCnQ']");
    await input.click();
    await input.press('Control+A');
    await input.press('Backspace');
    await input.type('2');

    await page.locator("[placeholder='Quantity']").fill("1")

    await page.locator("//span[normalize-space()='Save']").click();





});
