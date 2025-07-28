
const{test,expect}=require('@playwright/test')
test('handle webtable',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table=await page.locator('#productTable')

const columns=await table.locator('thead tr th')
console.log("no of columns:",await columns.count())
expect(await columns.count()).toBe(4)

const rows=await table.locator('tbody tr')
console.log("no of rows: ",await rows.count())
expect(await rows.count()).toBe(5)

//select cehckbox of specific product

/*const machedRow=await rows.filter({
    has:page.locator('td'),
    hasText: 'Smartwatch'
})
await machedRow.locator('input').check()
*/

//select multiple product checkboxes

//await selectcheckboxes(rows,page,'Smartwatch');
//await selectcheckboxes(rows,page,'Tablet');
//await selectcheckboxes(rows,page,'Laptop');

//select all the product details

/*for(let i=0;i<await rows.count();i++)
{
    const current_row=rows.nth(i)
    const tds=current_row.locator('td')
    for(let j=0;j<await tds.count()-1;j++)
    {
       console.log(await tds.nth(j).textContent())
       
    }
    console.log("**********")
}*/

//print all the data of all the pages
const pages=await page.locator('.pagination li a')
console.log("no of pages in the webtable is:",pages)
for(let p=0;p<await pages.count();p++)
{
    if(p>0)
    {
        await pages.nth(p).click()
    }
    for(let i=0;i<await rows.count();i++)
    {
    const current_row=rows.nth(i)
    const tds=current_row.locator('td')
    for(let j=0;j<await tds.count()-1;j++)
    {
       console.log(await tds.nth(j).textContent())
       
    }
    console.log("**********")
    }
  
    await page.waitForTimeout(5000)
}

})

async function selectcheckboxes(rows,page,product)
{
    const machedRow=await rows.filter({
    has:page.locator('td'),
    hasText: product
})
await machedRow.locator('input').check()

}