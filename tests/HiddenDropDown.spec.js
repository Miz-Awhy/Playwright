import{test,expect}from'@playwright/test';

test('Hidden option dropdown', async({page}) => {
    // Lunch URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter userName
    await page.fill("//input[@placeholder='Username']","Admin");

    //Enter passWord
    await page.fill("//input[@placeholder='Password']", "admin123");

    //Click the login button
    await page.click("//button[normalize-space()='Login']")

    //Click the PIM Tab
    await page.click("//span[normalize-space()='PIM']");

    //click on dropdown
    await page.click('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]')

    //waiting for options

    await page.waitForTimeout(3000);

    const options=await page.$$("//div[@role='listbox']//spam");

    for(let option of options)
    {
        const jobTitle=await option.textContent();
        //console.log(jobTitle);
        if(jobTitle.includes("Software Engineer"))
        {
            await option.click();
            break;
        }

    }



    await page.waitForTimeout(5000);
})