const{test,expect} = require('@playwright/test');

test('@part_11 How to Handle DropDown',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

// How to select  any option from the dropdown :- (Method :- 1) (Using Label visible Text - UI Text = DOM Text)

    await page.locator("#country").selectOption({label:'India'})

    await page.waitForTimeout(6000)

// How to select  any option from the dropdown :- (Method :- 2) (Using visible Text - UI Text = DOM Text)

    await page.locator("#country").selectOption('France');

    await page.waitForTimeout(6000)

// How to select any option from the dropdown :- (Method :- 3) (By Using Value attribute -- refer DOM )

    await page.locator("#country").selectOption({value:'uk'});

    await page.waitForTimeout(6000)

// How to select any option from the dropdown :- (Method :- 4) (By Using Index)-starts from 0

    await page.locator("#country").selectOption({index : 3});

    await page.waitForTimeout(6000)

// How to select any option from the dropdown :- (Method :- 5) (Using visible Text - UI Text = DOM Text)

    await page.selectOption("#country","Canada");

    await page.waitForTimeout(6000)














})