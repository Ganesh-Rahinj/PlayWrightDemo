
const{test,expect}=require('@playwright/test')
test.skip('handle Alert',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com')

//firstly write dialog window handler
page.on('dialog',async dialog =>{
expect(dialog.type()).toContain('alert')
await dialog.accept()
})

await page.click('#alertBtn')
})

test.skip('handle confirmation alert',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com')

//firstly write dialog window handler
page.on('dialog',async dialog =>{
expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('Press a button!')
//await dialog.accept()//close using ok button

await dialog.dismiss()//close using cancel button
})

await page.click('#confirmBtn')

await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')

})

test('handle prompt alert',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com')

//firstly write dialog window handler

page.on('dialog', async dialog =>{
expect(dialog.type()).toContain('prompt')
expect(dialog.message()).toContain('Please enter your name:')
await dialog.accept('ganesh')
 })
page.locator("//button[@id='promptBtn']").click();

