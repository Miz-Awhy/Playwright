import{test, expect} from '@playwright/test'
import { url } from 'inspector';

test('Mouse Drag And Drop Action', async({page}) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome = await page.locator('#box6')
    const italy = await page.locator('#box106')

    // Apporoach 1
    /*
    await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()
    */
    
    // Approach 2 - Using the dragTo method
    
    await rome.dragTo(italy)
    

await page.waitForTimeout(5000)
})