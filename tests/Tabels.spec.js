import{test, expect} from '@playwright/test'
import { url } from 'inspector';

test('handeling tables', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // 1) Total number of rows and columns
    
    const columns = await table.locator('thead tr th');
    console.log('Total Number Of Columns:', await columns.count());
    expect (await columns.count()).toBe(4); 

    const rows = await table.locator('tbody tr');
    console.log('Total Number Of rows:', await rows.count());
    expect (await rows.count()).toBe(5)
  

    // 2) select checkbox for product 4

    /*
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    matchedRow.locator('input').check();
    */  

    // 3) select multiple products by re-usable function 
    //await selectProduct(page,rows,'Product 1');
    //await selectProduct(page,rows,'Product 3');
    //await selectProduct(page,rows,'Product 5');
    
    // 4) print all the product details using loop on a page
   /*
    for (let i = 0; i < await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds = row.locator('td');

        for(let j=0;j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }
    }
    */

    // 5) reed data from all the pages in the table

    const pages = page.locator('.pagination li a');
    console.log('Number of Pages in the table :', await pages.count());

    for(let p = 0; p< await pages.count(); p++ ){
        if(p>0){
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++){
            const row = rows.nth(i);
            const tds = row.locator('td');

            for(let j=0; j<await tds.count()-1; j++){
                console.log(await tds.nth(j).textContent());
            }
            
        }
        await page.waitForTimeout(3000); 
        

    }
   

await page.waitForTimeout(3000);

})

//Testing the re-usability of the function 
/*
async function selectProduct(page, rows, name){
        const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: name
        })
        await matchedRow.locator('input').check();
    }
    */
