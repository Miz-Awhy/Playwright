

import{test, expect} from '@playwright/test';

test(' Classwork', async({page}) => {

    //lunch Url
    await page.goto("https://glover-web-v2.private-gke.patriciadev.com/");

    let userName = 'ayydot@gmail.com';
    let  password = 'Bricks77@1';

    //Enter Username
    await page.fill('#input-28', userName)

    //enter Password
    await page.fill ('#input-31', password);

    //click login button
     await page.click('//button[@type="button"]')

     //logout

     await page.waitForSelector("//div[@class='v-application--wrap']");
     await page.click("//div[@class='v-application--wrap']");
     //await page.waitForSelector(" //p[contains(text(),'Miz_Awhy')]");
     await page.locator(" //p[contains(text(),'Miz_Awhy')]").click();
     //await page.waitForSelector(" //div[contains(text(),'Log out')]");
     await page.locator(" //div[contains(text(),'Log out')]").click();
     

    //close page
     await page.waitForTimeout(5000).then(()=> page.close());

})