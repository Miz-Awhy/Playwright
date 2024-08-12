import{test,expect} from '@playwright/test'

test('Auto suggest dropdown', async ({page}) => {

    await page.goto('http://www.redbus.in/')

    await page.fill('#src', 'Delhi');
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

    const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")
    for(let options of  fromCityOptions) 
    {
        const value = await options.textContent();
        //console.log(value);
        if(value.includes('Okhla')) 
        {
            await options.click()
            break;
        }
    }




    await page.waitForTimeout(5000);

})