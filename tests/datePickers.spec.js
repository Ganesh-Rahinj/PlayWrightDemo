
const{test,expect}=require('@playwright/test')

test('date pickers',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
 
await page.locator('#datepicker').click()

const year="2022"
const month="January"
const date="10"




while(true)
{
  const current_year=await page.locator('.ui-datepicker-year').textContent()
  const current_month=await page.locator('.ui-datepicker-month').textContent()

  if(current_year==year && current_month==month)
  {
    break;
  }

  await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click()

}
 const dates=await page.$$('.ui-state-default')

 for(const d of  dates)
 {
   if(await d.textContent()==date)
   {
    await d.click()
    break;
   }


 }
 
await page.waitForTimeout(4000)

})