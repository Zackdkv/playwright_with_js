// Part : 4

// There are two ways by which we can import any module :-

// Method :- 1

// import  {test,expect} from '@playwright/test'

// Method :- 2

const {test,expect} = require('@playwright/test')

test('Locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

// There are two method by which we can click 

// Method :- 1

    await page.click('id=login2')

// Method :- 2

    // await page.locator('d=login2').click();


// There are three methods to handle an input box and enter text into it

// Method :- 1

// Enter text in username input box :-

   await page.fill('#loginusername','pavanol')

// Method :- 2

// Enter text in password input box :-

   await page.type("//input[id='loginpassword']",'test@123')

// Method :- 3
// To locate Single Element, we have to use page.locator :-

// For Single Element :-

// Example :-

    // await page.locator("//input[id='loginpassword']").fill('test@123')

// click on login button

    await page.click("//button[normalize-space()='Log in']")

 //How to check/aasert visibility of an element

 // verify logout link presence :-

    const logut_link = await page.locator("//button[normalize-space()='Log out']")

    expect(logut_link).toBeVisible();


    await page.close();





})
