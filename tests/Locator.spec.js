
   // const{test,expect}=require('@playwright/test')

      import{test,expect} from '@playwright/test'
      test('locators',async({page})=>{
      await page.goto("https://www.demoblaze.com/index.html")
      //click on Login Button
      //await page.locator('id=login2').click()
      await page.click('#login2')

      //handle login box
      await page.locator('#loginusername').fill("pavanol")//user
      await page.locator('#loginpassword').fill("test@123")//password

      await page.click("//button[normalize-space()='Log in']")//click on login

      const logout_link=await page.locator("//a[@id='logout2']")

      await expect(logout_link).toBeVisible()//verify logout link visible or not

      await page.close()
    })

