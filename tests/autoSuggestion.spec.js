
const{test,except}=require("@playwright/test")

test('auto suggestion',async({page})=>{

await page.goto('https://www.google.com')

await page.locator('#APjFqb').fill('selenium')

await page.waitForSelector("//ul[@role='listbox']//li/div/div[2]/div/div[contains(@class,'wM6W')]/span")

const values=await page.$$("//ul[@role='listbox']//li/div/div[2]/div/div[contains(@class,'wM6W')]/span")

for(const value of values)
{
    const text= await value.textContent()
    console.log(text)
}
//page.waitForTimeout(3000);
});
