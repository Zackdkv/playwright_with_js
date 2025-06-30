/*

//These are the recommended built-in locators. :--


page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

// page.getByAltText() to locate an element, usually image, by its text alternative. :--
--> with this locator, we can able to locate the text of the image with Alt attribute associated with it

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

// // page.getByAltText() to locate an element, usually image, by its text alternative. :--
// --> with this locator, we can able to locate the text of the image with Alt attribute associated with it
//in a DOM Structure

// const {test,expect} = require('@playwright/test')

// test('@part_5 locate multiple web element',async ({page})=>{

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     const logo = await page.getByAltText('company-branding')

//     await expect(logo).toBeVisible();

// })


// page.getByPlaceholder() to locate an input by placeholder.
// --> with this locator, we can able to locate the input box with Placeholder attribute associated with it
//in a DOM Structure

const {test,expect} = require('@playwright/test')

test('@part_5 locate multiple web element',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


// This is for Username input box :--

    await page.getByPlaceholder('Username').fill(Admin)

// This is for Password input box :--

    await page.getByPlaceholder('Username').fill(Admin)

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// --> with this locator, we can able to locate any actionable element like buttons, links, selectbox etc.
// and perform any action based on the requirement

    await page.getByRole(button,{type:'submit'}).click();


// page.getByText() to locate by text content.

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name)).toBeVisible();


})