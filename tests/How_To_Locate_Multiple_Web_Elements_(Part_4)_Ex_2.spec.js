// import  {test,expect} from '@playwright/test'

// We are printing all(multiple) link text in a console :-

const {test,expect} = require('@playwright/test')

test('@part_4 locate multiple web element',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

// Sometimes elements/product are taking too time to load completely:-
// To handle this, we can use

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a") 

// Note :- It will wait for the elements/locator to load completely. 
// Then it will execute/move to next line of code.

// To Locate multiple elements, Then we have to use page.$$()

// Example :-
// we want to fetch only links then we have to use 'a'(anchor) tag

   const products = await page.$$("//div[@id='tbodyid']//div//h4/a"); 

   for (const product of products){

    const producttexts = await product.textContent();

// trim() is used to remove white spaces from both left and right side of the text

    console.log(producttexts.trim())


   }





})