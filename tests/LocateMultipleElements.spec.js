

const{test,expect}=require('@playwright/test')

test('multiple test link',async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")
/*
const links=await page.$$('a');

for(const link of links)
{
const linkstext=  await link.textContent() //return text of element
  console.log(linkstext)
}*/
await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
const products=await page.$$("//div[@id='tbodyid']//div//h4/a")


for(const product of products)
{
const product_name= await product.textContent()
console.log(product_name)

}


})