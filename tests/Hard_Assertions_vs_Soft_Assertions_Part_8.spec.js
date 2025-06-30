const {test,expect} = require('@playwright/test');

test('@part_8 Hard Assertions Vs soft Assertion', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

// Syntax of Hard Assertions :----

    //1) await expect(page).toHaveURL()                page has URL

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2)  await expect(page).toHaveTitle()             page has Title

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3)  await expect(page).toBeVisible()             Element is Visible

    const logo_element_ =  page.locator('.header-logo')

    await expect(logo_element_).toBeVisible();


// Syntax of Soft Assertions :----

    //1) await expect.soft(page).toHaveURL()                page has URL

    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2)  await expect.soft(page).toHaveTitle()             page has Title

    await expect.soft(page).toHaveTitle('nopCommerce demo store. Register')

    //3)  await expect.soft(page).toBeVisible()             Element is Visible

    const logo_element =  page.locator('.header-logo')

    await expect.soft(logo_element).toBeVisible();


 



});
