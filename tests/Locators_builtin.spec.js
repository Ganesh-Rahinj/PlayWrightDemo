
  const{test,expect}=require("@playwright/test")

  test('bultin locators',async({page})=>{

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//getByAltText
  const logo= await page.getByAltText('company-branding')//alt attribute value

  await expect(logo).toBeVisible()
//getByPlaceholder
  await page.getByPlaceholder('Username').fill("Admin")//placeholder attrubute value
  await page.getByPlaceholder('Password').fill("admin123")

  //getByRole-use any attribute

  await page.getByRole('button',{type:'submit'}).click()

  //getByText
  const name =await page.locator('.oxd-userdropdown-name').textContent()
  await expect(page.getByText(name)).toBeVisible()

  //getByLabel use Label attribute<label>

  //getByTitle use title attribute<span title='abc'>

  //getBtTestId  use test id atrribute 






})