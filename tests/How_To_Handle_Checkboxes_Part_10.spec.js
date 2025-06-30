const{test,expect} = require('@playwright/test');

test('@part_10 handle Checkboxes',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

//  How to click on checkbox :- ( Method :- 1)

    await page.locator('#sunday').check();

//  How to click on checkbox :- ( Method :- 2)

    // await page.check('#sunday')

//  How to assert that the sunday checkbox is checked :- (Approach :- 1)

    await expect(await page.locator('#sunday')).toBeChecked();

//  How to assert that the sunday checkbox is checked :- (Approach :- 2)

     await expect(await page.locator('#sunday').isChecked()).toBeTruthy();  

//  How to assert that the monday checkbox is unchecked :- (Approach :- 3)

    await expect(await page.locator('#monday').isChecked()).toBeFalsy();

    const checkboxlocators = ['#sunday','#monday','#tuesday']

    for(const locators of checkboxlocators){ // Select respective checkboxes
        await page.locator(locators).check();
    }

    await page.waitForTimeout(4000);

    for (const locators of checkboxlocators){ // unSelect respective checkboxes
        if(page.locator(locators).isChecked()){
            await page.uncheck(locators);
        }
    }

    await page.waitForTimeout(8000);





   



})