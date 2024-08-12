import{test, expect} from '@playwright/test';

test('Login page', async({page})=> {

    // lunch the URL
    await page.goto('https://moneywave.flutterwave.com/#/login');

    // verify that the 'Login to Moneywave' is visivle
    const header = page.locator("//div[@class='panel__header__left']");
    await expect(header).toBeVisible();

    // verify that the 'Get a free account is visivle
    const signUpLink = page.locator("//a[@class='btn btn--default']");
    await expect(signUpLink).toBeVisible();

    //Login with invalid Username
    // enter valid email
    let invalidUserName = "daniel.o@zenithcrestechnologies.com";
    let validUserName = "daniel.o@zenithcresttechnologies.com";
    let invalidPassword = "Oluwatimileyin!";
    let validPassword = "Oluwatimileyin1!"

    await page.fill("  #authLoginEmail", invalidUserName);

    // enter valid password
    await page.fill(" //input[@type='password']",validPassword);

    // Click on login button
    await page.click("//button[@type='submit']");

    // error message is displayed
    const errorMsg = page.locator("//div[contains(text(),'User not found')]");
    await expect (errorMsg).toBeVisible();
    
    // Login with invalid Password

    // enter valid email
    await page.fill(" //input[@id='authLoginEmail']", validUserName);

    // enter valid password
    await page.fill(" //input[@id='authLoginPassword']",invalidPassword);
    // Click on login button
    await page.click("//button[@type='submit']");
    // user is logged in
    const errorMsg1 = page.locator("//div[contains(text(),'Invalid Login Credentials')]");
    await expect (errorMsg1).toBeVisible();

    //Successful Login
    // enter valid email
    await page.fill(" //input[@id='authLoginEmail']", validUserName);

    //await page.getByLabel('Your email').fill(validUserName);
    // enter valid password

    await page.fill(" //input[@id='authLoginPassword']",validPassword);
    //await page.getByLabel('Your password').fill(validPassword);

    // Click on login button
    await page.click("//button[@type='submit']");
    //await page.getByRole('button', { name: 'LOGIN TO MONEYWAVE' }).click();
    // user is logged in/ verify the 'Overview'page displays appropriately
    const overviewPage = page.locator("//span[contains(text(),'Overview')]");
    await expect (overviewPage).toBeVisible();

    //verify the 'Overview'page displays appropriately
    const yourWalletBalance = page.locator("//div[contains(text(), 'Your Wallet')]")
    await expect (yourWalletBalance).toBeVisible();

    //verify the 'SEND MONEY'page displays appropriately 
    await page.click ("//a[contains(text(),'Send Money')]");
    const bulkUpload = page.locator(" //label[contains(text(),'Bulk upload')]");
    await expect (bulkUpload).toBeVisible();

    //verify the 'Awaiting Approval'page displays appropriately 
    await page.click ("//span[contains(text(), 'Awaiting Approval')]");
    const approvedTransfers = page.locator(" //a[contains(text(), 'Approved transfers')]");
    await expect (approvedTransfers).toBeVisible();

    //verify the 'Transaction'page displays appropriately 
    await page.click ("//span[contains(text(), 'Transactions')]");
    const batchPayouts = page.locator("//a[contains(text(), 'Batch Payouts')]");
    await expect (batchPayouts).toBeVisible();

    //verify the 'Balance'page displays appropriately 
    await page.click ("//span[normalize-space()='Balance']");
    const currencyBalance = page.locator("  //span[normalize-space()='Currency Balance']");
    await expect (currencyBalance).toBeVisible();

    //verify the 'Beneficiaries'page displays appropriately 
    await page.click ("//span[contains(text(), 'Beneficiaries')]");
    const savedBeneficiaries = page.locator("//div[contains(text(), 'Your Saved Beneficiaries')]");
    await expect (savedBeneficiaries).toBeVisible();

    //verify the 'Settings'page displays appropriately 
    await page.click ("//span[contains(text(), 'Settings')]");
    const yourProfile = page.locator("//a[contains(text(), 'Your Profile')]");
    await expect (yourProfile).toBeVisible();


    //logout

    await page.click ('#Shape');
    await page.click (" //div[contains(text(),'Sign out')]");

    //close browser
    await page.close();


})