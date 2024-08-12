import {test, expect} from'@playwright/test';

test ('Bootstap dropdpwn', async ({page}) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.click ("//button[@class='multiselect dropdown-toggle btn btn-default']")

    //1 number of options in the list  
    //const selectOption = page.locator('ul>li label input');
    //await expect(selectOption).toHaveCount(11); 

    //2
    //const selectOption = await page.$$('ul>li label input');
    //await expect(selectOption.length).toBe(11)

    //3 select an option from the drop down
    /*const selectOption = await page.$$('ul>li label');
    for (let option of selectOption)
        {
            const value = await option.textContent();
            //console.log('Value is', value);
            if (value.includes('Angular')|| value.includes('Java'))
            {
                await option.click() ;
                break;
            }
        }*/

        //3 deselect an option from the drop down
    const selectOption = await page.$$('ul>li label');
    for (let option of selectOption)
        {
            const value = await option.textContent();
            //console.log('Value is', value);
            if (value.includes('HTML') || value.includes('CSS'))
            {
                await option.click() ;
                break;
            }
        }





    await page.waitForTimeout(5000);
})