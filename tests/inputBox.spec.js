import{test, expect} from '@playwright/test';

test(' Handeling input box', async({page}) => {

    page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page.locator("//input[@id='name']")).toBeVisible;
    await expect(page.locator("//input[@id='name']")).toBeEmpty;
    await expect(page.locator("//input[@id='name']")).toBeEditable;
    await expect(page.locator("//input[@id='name']")).toBeEnabled;

    await page.fill("//input[@id='name']", "Admin");


    await page.waitForTimeout(5000);
})