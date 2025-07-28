
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

await page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']//span[contains(text(),'realme GT 7 Dream Edition (Aston Martin Green,16GB')]").click()

await page.locator('#add-to-cart-button').click()










})
