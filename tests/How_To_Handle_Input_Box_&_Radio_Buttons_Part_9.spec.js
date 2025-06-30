const{test,expect} = require('@playwright/test');

test('@part_9 handle Input box & Radio Buttons',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

//  How to assert that the name inputbox is Visible :- 

    await expect(page.locator('#name')).toBeVisible();

//  How to assert that the name inputbox is Empty :- 

    await expect(page.locator('#name')).toBeEmpty();

//  How to assert that the name inputbox is Editable :- 

    await expect(page.locator('#name')).toBeEditable();

//  How to assert that the name inputbox is enabled :- 

    await expect(page.locator('#name')).toBeEnabled();

//  Method :- 1

    await page.locator('#name').fill('John')

//  Method :- 2

    await page.fill('#name','John')

    await page.waitForTimeout(5000); //pausing code




})