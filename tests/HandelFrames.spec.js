import{test, expect} from '@playwright/test'
import { url } from 'inspector';

test('frames', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    //total frames
    //const allFrames = await page.frames() 
    //console.log('Total Frames:',allFrames.length);

    //approach 1: using name or url
    //const frame1=await page.frame('name); //if name is available
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("input[name='mytext1']",'Hello');
    //await frame1.locator("input[name='mytext1']").fill('Hello');
  


    //approach 2:using frame locator
    //const inputBox = await page.frameLocator("frame[src='frame_1.html']" ).locator("//input[@name='mytext1']");
    //await inputBox.fill('Hello')



    await page.waitForTimeout(5000);
})