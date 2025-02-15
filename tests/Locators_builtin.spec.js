/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate from a control by associated label's text.
page.getByPlaceholder() to locate an input getByPlaceholder.
page.getByAltext() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attributes. 
page.getByTestId() to locate an element based on its data-testid attribute. 

*/


import {test, expect} from '@playwright/test';

test ('Built_inLocators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltext() to locate an element, usually image, by its text alternative.
    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() to locate an input getByPlaceholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', {type: 'submit'}).click()

    //page.getByText() to locate by text content.

    //await expect(await page.getByText('TtAurWToxz rmtagKbQOf')).toBeVisible();// this can only be used if the username doesnt change

    const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();

    await expect(await page.getByText(name)).toBeVisible();





})

