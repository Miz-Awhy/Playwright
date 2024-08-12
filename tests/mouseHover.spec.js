import{test, expect} from '@playwright/test'
import { url } from 'inspector';

test('mouse hover', async({page}) => {

    await page.goto('https://demo.opencart.com/');

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const macbook = await page.locator("//a[normalize-space()='Mac (1)']")

    // mouse hover
    await  desktop.hover();
    await macbook.hover();

    await page.waitForTimeout(5000)


})