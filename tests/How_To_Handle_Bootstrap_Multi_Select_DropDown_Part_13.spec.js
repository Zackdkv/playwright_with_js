const { test, expect } = require('@playwright/test');

test('@part_13 HHow to handle Bootstrap multi select DropDown', async ({ page }) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click() // click on the dropdown
//1
    //const options await page.locator ('ul>li label input')
    //await expect(options).toHaveCount(11);

// 2
    const options = await page.$$('ul>li label input')

    await expect(options.length).toBe(11)

    await page.waitForTimeout(5000);

    //3 select options from dropdown

// $$ is used to select multiple elements; it returns a JS array of matching elements.

    const options_ = await page.$$('ul>li label')
    for (let option of options) {
        const value = await option.textContent();
        //console.log("value is", value)

// The || operator functions as a logical OR — if either 'Angular' or 'Java' is found, it will trigger a click action on both elements sequentially.
        if (value.includes('Angular') || value.includes('Java')) {
        }
        await option.click()
    }
    await page.waitForTimeout(5000);

    // if (value.includes('Angular') || value.includes('Java')) {
    //     await option.click()
    // }

    // // deselect options
    // const options = await page.$$('ul>li label')
    // for (let option of options) {
    //     const value = await option.textContent();
    //     //console.log("value is", value)
    //     if (value.includes('HTML') || value.includes('CSS')) {
    //         await option.click()
    //     }

    // }


});