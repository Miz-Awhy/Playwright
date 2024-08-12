import{test, expect} from '@playwright/test';

test(' Handeling radio button', async({page}) => {

    page.goto('https://testautomationpractice.blogspot.com/');

    //Female Radio button
    await expect(page.locator("//input[@id='female']")).toBeVisible;

    await page.check("//input[@id='female']");
    await expect(await page.locator("//input[@id='female']")).toBeChecked;
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeTruthy();


    //Male Radio Button
    await expect(await page.locator("//input[@id='male']")).toBeVisible;
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy();


    await page.waitForTimeout(5000);//pausing code
})