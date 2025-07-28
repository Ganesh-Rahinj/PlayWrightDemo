
const{test,expect}=require('@playwright/test')
test('checkboxes',async({page})=>{

   await page.goto('https://demo.nopcommerce.com/register')
    //checkbox
    const chkbox=page.locator('#Newsletter')
    await expect(chkbox).toBeChecked()

    //inputBox

   await expect(page.locator('#FirstName')).toBeVisible()
   await expect(page.locator('#FirstName')).toBeEditable()
   await expect(page.locator('#FirstName')).toBeEmpty()
   await expect(page.locator('#FirstName')).toBeEnabled()


   await page.locator('#FirstName').fill('ganesh')

   //RadioButton
   await page.locator('#gender-male').check()
   await expect( await page.locator('#gender-male')).toBeChecked()
   await expect( await page.locator('#gender-male').isChecked()).toBeTruthy()//chekced

   await expect(await page.locator('#gender-female').isChecked()).toBeFalsy()//unchecked






})
