
import {test,expect, chromium} from '@playwright/test'

test('open new window',async()=>{

const browser=await chromium.launch()
 const conetxt=await browser.newContext({viewport: { width: 600, height: 720 
    
 }})
 const new_page=await conetxt.newPage()
  
 await new_page.goto('http://www.google.com')

 

})