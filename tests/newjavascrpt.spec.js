
const{test,expect}=require('@playwright/test')

test('first test',async ({page})=>{

  await  page.goto('https://www.google.com')

  const title=page.title()

  await console.log("page title is",title)

  await expect(page).toHaveTitle('Google')

  await expect(page).toHaveURL('https://www.google.com')

  await page.close()


})