
const{test,expect}=require('@playwright/test')
test('mouse hovor',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const point_me=await page.locator("//button[normalize-space()='Point Me']")
await point_me.hover()

await page.waitForTimeout(2000)


})

