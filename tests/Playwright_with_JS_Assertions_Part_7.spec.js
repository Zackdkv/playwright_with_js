// Assertions

// Playwright includes test assertions in the form of expect function. To make an assertion, call expect(value) and choose a matcher 
// that reflects the expectation. There are many generic matchers like toEqual,toContain, toBeTruthy that can be used to assert any conditions.

// expect(success).toBeTruthy();

// Playwright also includes web-specific async matchers that will wait until the expected condition is met. Consider the following example:

// await expect(page.getByTestId('status')).toHaveText('Submitted');



const {test,expect} = require('@playwright/test');

test('@part_7 Assertions', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    //1) await expect(page).toHaveURL()                page has URL

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2)  await expect(page).toHaveTitle()             page has Title

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3)  await expect(page).toBeVisible()             Element is Visible

    const logo_element =  page.locator('.header-logo')

    await expect(logo_element).toBeVisible();

    //4)  await expect(page).toBeEnabled()             Element is enabled

    const search_store_element =  page.locator('[id="small-searchterms"]')

    await expect(search_store_element).toBeEnabled();

    //5)  await expect(page).toBeChecked();          Radio/Checkbox Element is checked

    const male_radio_button =  page.locator('#gender-male')

    await male_radio_button.click()

    expect(male_radio_button).toBeChecked();

    //6)  await expect(page).toHaveAttribute();           

    const register_button_element =  page.locator('#register-button')

    // name is a atttribute and register-button is a value of atttribute name

    await expect(register_button_element).toHaveAttribute('name','register-button') 

    //7)  await expect(page).toHaveText()       ---->         Element matches text

    const register_element =  page.locator('div.page-title > h1');  //No need to write Text content

    await expect(register_element).toHaveText('Register');

    //8)  await expect(page).toContainText();    ---->   Element matches partial text

    const your_personal_details_element = page.locator('form > div:nth-child(1) > div.title > strong');  //No need to write Text content

    await expect(your_personal_details_element).toContainText('Personal')

    //9)  await expect(page).toHaveValue();       ----->   Input has a value

    // Generally, used to verify that the input box contain that text/value or not

    const email_input_box = page.locator('#Email')

    await email_input_box.fill('test23@gmail.com')

    expect(email_input_box).toHaveValue('test23@gmail.com');

    //10)  await expect(page).toHaveCount()       ----->   List of elements has given length

// Generally used for drop down element to verify the count of all the elements present in a dropdown

    const currency_input_box = page.locator("[name='customerCurrency'] option")

    expect(currency_input_box).toHaveCount(2)

/* Negating matchers :---

In general, we can expect the opposite to be true by adding a .not to the front of the matchers:

# Example :--
expect(value).not.toEqual(0);

await expect(locator).not.toContainText('some text');      */













});