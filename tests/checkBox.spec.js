import{test, expect} from '@playwright/test';

test(' Handeling checkboxes', async({page}) => {

    page.goto('https://testautomationpractice.blogspot.com/');

    // Single checkbox
    await page.check("//input[@id='tuesday'and @type='checkbox']");

    expect (await page.isChecked("//input[@id='tuesday']")).toBe(true); 
    expect (await page.isChecked("//input[@id='sunday']")).toBe(false); 

    await page.fill("//input[@id='name']", "Admin");

    //multiple checboxex
    const checkboxes = [
        "//input[@id='tuesday'and @type='checkbox']",
        "//input[@id='thursday'and @type='checkbox']",
        "//input[@id='saturday'and @type='checkbox']"
    ];

    for(const locator of checkboxes)//select multiple checkboxes
    {
        //await page.locator(locator).check();
        await page.check(locator);
        await page.uncheck(locator);
    }

    await page.waitForTimeout(5000);

    for(const locator of checkboxes)//unselect multiple checkboxes already checked
    {
        if (!(await page.isChecked(locator)))
        if(await page.locator(locator).isChecked())
        {
            await page.uncheck(locator);
        }
        
    }

    await page.waitForTimeout(5000);
})