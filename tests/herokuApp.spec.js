const{test,expect} = require('@playwright/test');

test('Home page',async ({page})=>{
    //Lunch Application URL
    await page.goto('https://the-internet.herokuapp.com/');
    //Checking the title of the webpage
    const pageTitle=page.title();
    //Capture the Page URL
    const pageURL =page.url();
    //Verify Page title
    await expect(page).toHaveTitle('The Internet');
    //Verify H1 text
    /*const h1Text=await page.$eval("h1",el => el.textContent);
    await expect(h1Text).toBe('Welcome to the-internet');*/

    const locatorh1 = page.locator('h1');
    await expect(locatorh1).toContainText('Welcome to the-internet');
    
    //Verify H2 text
    /*const h2Text=await page.$eval("h2",el => el.textContent)
    await expect(h2Text).toBe('Available Examples');*/

    const locatorh2 = page.locator('h2');
    await expect(locatorh2).toContainText('Available Examples');

    //verify Page URL
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
    //Close webpage
    await page.close();

})