
const{test,expect}=require("@playwright/test")
test('Assertions',async({page})=>{
await page.goto('https://demo.nopcommerce.com/register')

//check same url or not
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

//to verify title of page
await expect(page).toHaveTitle('nopCommerce demo store. Register')

//to check webelement is visible or not
const logo=await page.locator('.header-logo');
await expect.soft(logo).toBeVisible();

//Check element is enable/disabled

const inputbox=await page.locator("//input[@id='small-searchterms']")
await expect(inputbox).toBeEnabled()

//radio button checked or not

const male=await page.locator('#gender-male')
male.check()
await expect(male).toBeChecked()

//checkbox

const newsletterchkbox=await page.locator('#Newsletter')

await expect(newsletterchkbox).toBeChecked()

//Element has attribute to check

const pagevariable=await page.locator('#register-button')
await expect(pagevariable).toHaveAttribute('type','submit')

//element matches text or not

await expect(page.locator('//a[normalize-space()="Register"]')).toHaveText('Register')

await expect(page.locator('//a[normalize-space()="Register"]')).toContainText('Reg')

//check input box have value or not

const email=page.locator('#Email')
await email.fill('abe@gmail.com')
expect(email).not.toHaveValue('abe@gmail.co')

//check how many options toHaveCount()











})