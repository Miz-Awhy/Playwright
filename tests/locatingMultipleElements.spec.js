import {test, expect} from '@playwright/test' //import test for testing and expect for validation

test ('multipleElements', async({page})=> { 
    await page.goto('https://demoblaze.com/index.html#');

   /* const links = await page.$$('a');

    for(const link of links)
    {
        const linkText = await link.textContent();
        console.log(linkText);
    }
    */
// Capture all the products in  the homepage
//page.waitForSelector("//div[@id='tbodyid']//h4/a");   

    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    for(const product of products){
        const prodName = await product.textContent();
        console.log(prodName);
    }

})

