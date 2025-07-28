
const{test,expect}=require('@playwright/test')

test('Multiselect Drop down',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.selectOption("#colors",['Blue','Red','Yellow'])

//Assertions
//1: no of options from drpdown

//const option=await page.locator('#colors option')
//await expect(option).toHaveCount(7)

//2: using JS Array

const options=await page.$$('#colors option')
console.log("no of options:",options.length)
await expect(options.length).toBe(7)


//3: check presence of value/option in dropdown

const optionss=await page.locator('#colors').textContent()

expect(optionss.includes('Blue')).toBeTruthy()//option available

expect(optionss.includes('Black')).toBeFalsy()//should not available

await page.waitForTimeout(3000);

})