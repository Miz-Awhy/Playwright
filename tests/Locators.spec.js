//const{test,expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Locators', async ({page})=>{
    //lunch URL
    await page.goto("https://demoblaze.com/index.html");

    //click on login button - property
    /*const loginButtonProperty = page.locator('#login > input[type="submit"]');
    await loginButtonProperty.click();
    await page.locator('id=login2').click();*/
    await page.click('id=login2');

    // provide username - CSS
    //await page.locator('#loginusername').fill('awhydot');
    await page.fill('#loginusername','awhydot');
    //await page.type('#loginusername', 'awhydot');

   // provide password  - CSS
   await page.fill('#loginpassword','pasword@123');

   //click on the login button - Xpath
   await page.click("//button[contains(text(),'Log in')]")
   //await page.click('button[onclick="logIn()"]');

   //verify logout link presence  - xpath
   //const logOutLink = page.locator('id=logout2'); //CSS selector
   const logOutLink = page.locator ("//a[@id='logout2']"); //Xpath selector
   await expect(logOutLink).toBeVisible();

   //locate multiple webElements
  // const element=await page.$$(locator)
   
   await page.close();
   
   });






