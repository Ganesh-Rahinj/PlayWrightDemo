
const{test,expect}=require('@playwright/test');
const { Console } = require('console');

test('Google page language count',async({page})=>{

await page.goto('https://www.google.com')

const count= await page.locator('#SIvCob a')

console.log("languages displayed on google page ",count)

await expect(count).toHaveCount(9);

const co= await page.$$('#SIvCob a')

for(const c of co)
{
    const text=await c.textContent()
    await console.log(text)
}
})