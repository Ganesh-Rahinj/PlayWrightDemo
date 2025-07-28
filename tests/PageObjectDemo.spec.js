
const{test,expect}=require('@playwright/test')
import {pageobjects} from '../pages/pageObjects'
test('page object model',async({page})=>{

  const login1 =new pageobjects(page);

   await login1.goto()
   await login1.login('ganesh','rahinj');

});