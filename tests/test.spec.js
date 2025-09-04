
const{test,expect}=require('@playwright/test')
test('demo test',async({page})=>{
await page.goto('https://www.amazon.in/')

await page.hover("(//span[contains(text(),'Account')])[1]")

await page.locator("//span[contains(text(),'Sign in')]").click()

await page.locator('#ap_email_login').fill('9673080939')

await page.locator('.a-button-input').click()

await page.locator('#ap_password').fill('Mobikode@12345')

await page.locator('#signInSubmit').click()

await page.locator('#twotabsearchtextbox').fill('Smart Phones')

await page.locator('#nav-search-submit-button').click()

await page.locator("//span[contains(text(),'Acer Super ZX 5G (Carbon Black, 6GB RAM, 128GB Sto')]").click()

await page.locator("//div[@class='a-section a-spacing-none a-padding-none']//input[@id='add-to-cart-button']").click();










})
