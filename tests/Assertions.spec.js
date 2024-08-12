import {test, expect} from '@playwright/test';

test('AssettionsTest',  async ({page}) => {

    //lunch URL page
    await page.goto('https://demo.nopcommerce.com/register');

    //expect(page).toHaveURL()                  Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //expect(page).toHaveTitle()                Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //expect(locator).toBeVisible()	           Element is visible
    const logoElement = page.locator("//div[@class='header-logo']")
    await expect(logoElement).toBeVisible()	

    //expect(locator).toBeEnabled()           Element is enabled (clickable)
    const searchStoreBox = page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled();

    //expect(locator).toBeChecked()	            Checkbox is checked
    const femaleRadioButton = page.locator('#gender-female');
    await femaleRadioButton.click(); // select radio button
    await expect(femaleRadioButton).toBeChecked();

    //expect(locator).toBeChecked()	            Checkbox is checked
    const newsLetterCheckBox = page.locator('#Newsletter')
    await expect(newsLetterCheckBox).toBeChecked()   //The checkbox is highlighted

    // expect(locator).toHaveAttribute()	    Element has a DOM attribute

// expect(locator).toHaveText()	            Element matches text
// expect(locator).toContainText()	        Element contains text
//await expect(locator).toHaveValue()	    Input has a value
// expect(locator).toHaveCount()	        List has exact number of children
    const regButton = page.locator(' #register-button');
    await expect(regButton).toHaveAttribute('name','register-button');

    // expect(locator).toHaveText()	        Element matches text

    await expect (page.locator('.page-title h1')).toHaveText('Register')	        Element matches text
    await expect (page.locator('.page-title h1')).toContainText('Reg')

    // expect(locator).toHaveValue()	    Input has a value
    const emailInput = page.locator('#Email');
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');

    // expect(locator).toHaveCount()	    List has exact number of children
    const options = page.locator('select[name="DateOfBirthMonth"] option');
    await expect(options).toHaveCount(13);


})