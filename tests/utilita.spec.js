import {test, expect} from '@playwright/test';

test('landingPage', async({page})=> {
    await page.goto('https://www.utilita.co.uk/');

    //verify that the 'Energy' drop down link is visible
    const energyDropDown = await page.$('#energy-link');
})