import{test, expect} from '@playwright/test'

test('Handle dropDowns',  async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple option from  multi selection dropdpwn
    //await page.selectOption('#colors',['Blue','Green', 'Red']);

//assertions
    //1) check number of options in dropdown
   // const options=await page.locator('#colors').count(5);

    //2)  check number of options in dropdown using JS array
    //const options=await page.$$('#colors option')
    //console.log("Number of Options: ",options.length)
    //await expect(options.length).toBe(5);

    //3) check presence of value in the dropdown
    /*const color_present = await page.waitForSelector("#colors option[value='Blue']");
    await expect(color_present).toBeTruthy();*/
    const content = await page.locator("#colors").textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();

    await page.waitForTimeout(5000);
})