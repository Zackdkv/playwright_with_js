// import  {test,expect} from '@playwright/test'

// We are printing all(multiple) link text in a console :-

const {test,expect} = require('@playwright/test')

test('@part_4 locate multiple web element',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

// To Locate multiple elements, Then we have to use page.$$()

// Example :-
// we want to fetch only links then we have to use 'a'(anchor) tag
   const links = await page.$$('a'); 

   for (const link of links){

    const linktext = await link.textContent();

// trim() is used to remove white spaces from both left and right side of the text

    console.log(linktext.trim())


   }





})