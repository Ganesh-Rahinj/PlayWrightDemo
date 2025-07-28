
const{test,expect}=require('@playwright/test')

test('handle Drop down',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//multiple ways to select options from dropdown

//await page.locator('#country').selectOption({label:'India'})//label

//await page.locator('#country').selectOption('India')//visibleText

//await page.locator('#country').selectOption('india')//value

//await page.locator('#country').selectOption({index:1})//Index

//await page.selectOption("#country",'India')

//Assetions

//const options=await page.locator('#country option')
  //await expect(options).toHaveCount(10);

//check no option is dropdown approach 2

//const optionss=await page.$$('#country option')
//console.log("no of options:",optionss.length)
//await expect(optionss.length).toBe(10)

//check presence of element/value in dropdown-approach1
//const texts=await page.locator('#country').textContent()
//await expect(texts.includes('India')).toBeTruthy()

//select option from dropdown by using loop
const options=await page.$$('#country option')
let status=false;
for(const option of options)
{
   let value=await option.textContent()

   if(value.includes('France'))
   {
     status=true;
     break;
   }
}
await  expect(status).toBeTruthy()




await page.waitForTimeout(3000);


})
