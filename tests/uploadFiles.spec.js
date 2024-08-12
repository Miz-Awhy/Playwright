import{test, expect} from '@playwright/test'
import { url } from 'inspector';
/*
test('Single Files', async({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.waitForSelector('#filesToUpload')
    await page.click('#filesToUpload')

    await page.locator('Xpath').setInputFiles('tests\uploadFiles\testFile1.pdf')

})
*/
    test.only('Multiple Files', async({page}) => {

        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        //Uploading files

        await page.locator('#filesToUpload')
            .setInputFiles(['tests/uploadFiles/testFile1.pdf', 
                            'tests/uploadFiles/testFile2.pdf'])
        await page.waitForTimeout(3000)
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('testFile1.pdf');
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('testFile2.pdf');
    
    await page.waitForTimeout(3000)

    //Removing the files

    await page.locator('#filesToUpload')
            .setInputFiles([])

    await page.waitForTimeout(3000)

    expect(await  page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

await page.waitForTimeout(3000)



})