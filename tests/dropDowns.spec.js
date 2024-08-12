import{test, expect} from '@playwright/test';

 test ('Handeling  dropDowns', async ({page})=> {

    //lunch web application
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Selecting a value from the drop-down menu using text

    /*await page.locator('#country').selectOption({label:'United Kingdom'});//by label
    await page.locator('#country').selectOption('India'),//by text
    await page.locator('#country').selectOption({value: 'germany'})//by value
    await page.locator('#country').selectOption({index: 1})// by index
    await page.selectOption('country','United Kingdom')// by text
    */

    //Assertions 
    //1) check number of options in dropdown
    //const Options = page.locator("#country").count(10);

   //2) check number of options in dropdown - Approach 2
    /*const options = await page.$$('#country option');
   // console.log('Number of options:', options.length)
   await expect (options.length).toBe(10);*/

   //3) check precence of value in the dropdown
   /*const content = await page.locator('#country').textContent()
   await expect(content.includes('Canada')).toBeTruthy();*/

 //4) check precence of value in the dropdown- Approach 2
    /*
 const options = await page.$$('#country option');
    let status = false;

    for (const option of options)
    {
        //console.log(await option.textContent());
        let value=await option.textContent();
        if(value.includes("Canada"))
        {
            status = true;
            break;
         }
    }

    expect(status).toBeTruthy();
    */
//5) select option from the dropdown using loop
const options = await page.$$('#country option');
let status = false;

for (const option of options)
{
    //console.log(await option.textContent());
    let value=await option.textContent();
    if(value.includes("Canada"))
    {
        await page .selectOption( '#country' , value );
        break;
     }
}




    await page.waitForTimeout(5000);

})