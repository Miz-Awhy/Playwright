import{test, expect} from '@playwright/test'
import { url } from 'inspector';

test('date picker', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // input date in the field
    //await page.fill('.hasDatepicker', '01/25/2024')

    // use the date picker  to select a date
    const year = '2024'
    const month =  'January'
    const day = '1'

    await page.click('.hasDatepicker')

    while  (true) {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear  = await page.locator('.ui-datepicker-year').textContent()

        if(currentYear == year && currentMonth == month) {
            break;
        }

        await page.locator('[title="Prev"]').click()
        //await page.locator('[title="Next"]').click()

    }

    const dates = await page.$$('.ui-state-default')

    //date selection using loop
    /*
    for (const dt of dates){
        if(await dt.innerText()== day) {
            await dt.click();
            break;
        }
    }
    */

    //direct date selection

    await page.click(`//a[@class='ui-state-default'][text()='${day}']`) 

    await page.waitForTimeout(5000)
})