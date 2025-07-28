
const{test,expect}=require('@playwright/test')
test('handle inner frame',async({page})=>{

   await page.goto('https://ui.vision/demo/webtest/frames/')

   const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

   await frame3.locator("input[name='mytext3']").fill('welcome')

   const child_frame= await frame3.childFrames()

   await child_frame[0].locator("//*[@id='i6']/div[3]/div").check()

   await page.waitForTimeout(3000)


})