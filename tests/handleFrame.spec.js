
const{test,expect}=require('@playwright/test')
test('handle frame',async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

const total_frames=page.frames()
console.log("no of frames:",total_frames.length)

//approach 1: using name or URL of page

//const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

//await frame1.fill("[name='mytext1']",'Hello')

//approach 2: frame locator

const input=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
await input.fill("hello")

await page.waitForTimeout(3000)

})