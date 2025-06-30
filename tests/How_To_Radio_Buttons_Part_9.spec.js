const{test,expect} = require('@playwright/test');

test('@part_9A handle Input box & Radio Buttons',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

// Input box == name

//  How to click on radiobutton :- ( Method :- 1)

    await page.locator('#male').check();

//  How to click on radiobutton :- ( Method :- 2)

    await page.check('#male')

//  How to assert that the male radiobutton is checked :- (Approach :- 1)

    await expect(await page.locator('#male')).toBeChecked();

//  How to assert that the male radiobutton is checked :- (Approach :- 2)

     await expect(await page.locator('#male').isChecked()).toBeTruthy();     


//  How to assert that the female radiobutton is unchecked :- (Approach :- 3)

     await expect(await page.locator('#female').isChecked()).toBeFalsy();
         
    await page.waitForTimeout(4000);








})