const{test,expect} = require('@playwright/test');

test('@part_11_a How to Handle DropDown',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

// How to check number of options in the dropdown - Approach - 1

    const options_1 =  page.locator('#country option') // This will return int

    await expect(options_1).toHaveCount(10); 

// How to check number of options in the dropdown - Approach - 2

    const options_2 = await page.$$('#country option') // This will return an array

    console.log(options_2.length)

    expect(options_2.length).toBe(10)

// How to check the presence of value/option in the dropdown - Approach :- 1

    const options_3 =  await page.locator('#country').textContent();

    await expect(options_3.includes('India')).toBeTruthy();

// How to check the presence of value/option in the dropdown - Approach :- 2 ( using loop)

const options_4  =  await page.$$('#country option')

let status = false;
for (const option of options_4){
    let value = await option.textContent();

    if (value.includes('France')){
        status = true;
        break;
    }

expect(status).toBeTruthy();
    
}

// How to select the value/option from the dropdown - Approach :- 1 ( by using looping )

const options_5  =  await page.$$('#country option')

for (const option of options_5){
     let value = await option.textContent();

    if (value.includes('France')){
        await page.selectOption('#country',value)
        break;
        
    }


await page.waitForTimeout(5000)
    
}























})