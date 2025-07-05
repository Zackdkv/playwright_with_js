const{test,expect} = require('@playwright/test');
test('@part_12 How to Handle Multi Select DropDown',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

// Select Multiple option from multi select dropdown
    await page.locator('#colors').focus();
    await page.selectOption('#colors',['Blue','Red','Yellow','White']);
    await page.waitForTimeout(4000);

// Assertions :-
//  Check number of option in DropDown :-
    const Options_ = await page.locator('#colors option')

// Assert Number of Options 
    await expect(Options_).toHaveCount(7)

//  Check number of option using JS Array :-
   const Options =  await page.$$('#colors option')

   console.log('Number of Option',Options.length)

// Assert Number of Options 
   await expect(Options.length).toBe(7)

// Check Presence of value in the dropdown :-
    const content = await page.locator('#colors').textContent();

    expect(content.includes('Blue')).toBeTruthy();

    expect(content.includes('Black')).toBeFalsy();






})