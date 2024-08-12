import{test, expect} from '@playwright/test'
import { url } from 'inspector';

test('Inner/Nested Frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Assesing frame by url
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    //await frame3.locator("input[name='mytext3']").fill('Welcome')

    //const inputBox = await page.frameLocator("frame[src='frame_3.html']" ).locator("//input[@name='mytext3']");
    //await inputBox.fill('Welcome')

    //nested frames
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check()





    await page.waitForTimeout(5000);
})