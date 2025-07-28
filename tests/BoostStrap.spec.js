

const{test,expect}=require('@playwright/test')

test('BoostStrap Drop down',async({page})=>{
//1 how to total no of options
await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
await page.locator('.multiselect').click()
const options=await page.locator('ul>li label input')
await expect(options).toHaveCount(11)

//2 select multiple options from dropdown

const opt=await page.$$('ul>li label')
for(const option of opt)
{
const value=await option.textContent()
//await console.log("value is:",value)
if(value.includes('Angular')||value.includes('Java'))
{
    await option.click()
    
}
}

//deselect options
const opt1=await page.$$('ul>li label')
for(const option1 of opt1)
{
const value=await option1.textContent()
//await console.log("value is:",value)
if(value.includes('CSS')||value.includes('HTML'))
{
    await option1.click()
    
}
}


await page.waitForTimeout(3000)

})
