const{test,expect} = require('@playwright/test');

test('Home page',async ({page})=>{
    //Lunch Application URL
    await page.goto('https://demoblaze.com/index.html');
    //Checking the title of the webpage
    const pageTitle=page.title();
    console.log('page title is:', pageTitle);
    //Capture the Page URL
    const pageURL =page.url();
    //Verify Page title
    await expect(page).toHaveTitle('STORE');

    console.log('the current URL of the page is : ', pageURL);
    //verify Page URL
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    //Close webpage
    await page.close();

})

