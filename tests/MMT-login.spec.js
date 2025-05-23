import {test, except} from '@playwright/test'

test('Login', async({page})=>{

    await page.goto("http://mymetrotitletest:8090/");
    await page.waitForLoadState("networkidle");
    await page.setViewportSize({width:1720, height:900});
    const email=page.locator("[name='Email']");
    const Password= page.locator("[name='Password']");
    const submit_btn= page.locator("[type='submit']");
    
    await email.waitFor({state:'visible'});
    await email.click();
    await email.fill('Radhe.Shyam@acertusdelivers.com'); 
 

    await Password.waitFor({state:'visible'});
    await Password.click();
    await Password.fill('Radhe@2711');

    await page.waitForTimeout(5000);
    await submit_btn.click();
    

    const createOdr_btn = page.locator('#openCreateOrderModal');
    await createOdr_btn.waitFor({state:'visible'});
    await createOdr_btn.click();
    await page.waitForTimeout(3000);
    const selectAccount= page.locator('#reqBy');
    const orderType= page.locator('#orderType');

    let accountValue= 'METRO TITLE SERVICES';
    // await selectAccount.selectOption({value:'METRO TITLE SERVICES'});
    let accVal_fromMMT= await selectAccount.textContent();

    


    await orderType.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    /*
    Becaue automation is too fast application not displaying more elements on the page to interact, so clicking SelectAccount
    again and select Metro Title Service again so that application gets more time to display other elements on the page. 
    */
    await selectAccount.click();
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');

    // await page.waitForTimeout(5000);

    await orderType.click();
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);

    const vin_txtbox= page.locator("[name='vin']");
    await vin_txtbox.waitFor({state:'visible'});
    await vin_txtbox.fill("WBAHN83508DT78668");

    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);

    const select_state= await page.locator('#state');
    await select_state.waitFor({stage:'visible'});
    await select_state.click();
    await page.waitForTimeout(2000);
    



    /*
    Selecting State Option from drop down list.

    */
    await page.waitForSelector("[role='combobox']");
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);
    const reg_Name= page.locator("[name='regName']");
    await reg_Name.waitFor({state:'visible'});
    await reg_Name.fill("AutomatedTest");
    const reg_Add= page.locator("[placeholder='1000 Street Rd']");
    await reg_Add.waitFor({state:'visible'});
    await reg_Add.fill("300 SUNSHINE ACRES TRL")

    const reg_City= page.locator("[name='city']");
    await reg_City.waitFor({state:'visible'});
    await reg_City.fill("ROYAL");

    const reg_Zip= page.locator("[name='zip']");
    await reg_Zip.waitFor({state:'visible'});
    await reg_Zip.fill("71968");

    const req_btn= page.locator("//button[contains(text(),'Requirements')]");
    await req_btn.waitFor({state:'visible'});
    await req_btn.click();
    await page.waitForTimeout(5000);

    const Is_Lease_No= page.locator("(//input[@type='checkbox'])[2]");
    await Is_Lease_No.waitFor({state:'visible'});
    await Is_Lease_No.click();
    await page.waitForTimeout(2000);

    const Is_Trailer_No= page.locator("(//input[@type='checkbox'])[4]");
    await Is_Trailer_No.waitFor({stage:'visible'});
    await Is_Trailer_No.click();
    await page.waitForTimeout(2000);    

    const Is_Trade_No= page.locator("(//input[@type='checkbox'])[6]");
    await Is_Trade_No.waitFor({stage:'visible'});
    await Is_Trade_No.click();
    await page.waitForTimeout(2000);

    const Is_Lien_No= page.locator("(//input[@type='checkbox'])[8]");
    await Is_Lien_No.waitFor({state:'visible'});
    await Is_Lien_No.click();
    await page.waitForTimeout(2000);

    const have_PPAN_No= page.locator("(//input[@type='checkbox'])[10]");
    await have_PPAN_No.waitFor({state:'visible'});
    await have_PPAN_No.click();
    await page.waitForTimeout(2000);

    const Is_state_Change_No= page.locator("(//input[@type='checkbox'])[12]");
    await Is_state_Change_No.waitFor({state:'visible'});
    await Is_state_Change_No.click();
    await page.waitForTimeout(5000);

    const Is_DL_No= page.locator("(//input[@type='checkbox'])[14]");
    await Is_DL_No.waitFor({state:'visible'});
    await Is_DL_No.click();

    await page.waitForTimeout(2000);

    const AR_PPAN_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(0);
    await AR_PPAN_txtbox.waitFor({state:'visible'});
    await AR_PPAN_txtbox.click();
    await AR_PPAN_txtbox.fill("AutomatedTest");

    const AR_PType_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(1);
    await AR_PType_txtbox.waitFor({state:'visible'});
    await AR_PType_txtbox.click();
    await AR_PType_txtbox.fill("PASSENGER");

    const Color_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(2);
    await Color_txtbox.waitFor({state:'visible'});
    await Color_txtbox.click();
    await Color_txtbox.fill("WHITE");

    const gvwrtxtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(4);
    await gvwrtxtbox.waitFor({state:'visible'});
    await gvwrtxtbox.click();
    await gvwrtxtbox.clear();
    await gvwrtxtbox.fill("2365");

    const InsuranceComp_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(5);
    await InsuranceComp_txtbox.waitFor({state:'visible'});
    await InsuranceComp_txtbox.click();
    await InsuranceComp_txtbox.fill("GEICO");

    const InsurancePolicy_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(6);
    await InsurancePolicy_txtbox.waitFor({state:'visible'});
    await InsurancePolicy_txtbox.click();
    await InsurancePolicy_txtbox.fill("GTEST");

    //Mail To addres button 
    const mailToadd_btn= page.locator("(//button[contains(text(),'Enter Address')])[1]");
    await mailToadd_btn.waitFor({state:'visible'});
    await mailToadd_btn.click();

    const enter_addInfo_recipientName= page.locator("//input[@name='name']");
    await enter_addInfo_recipientName.waitFor({state:'visible'});
    await enter_addInfo_recipientName.fill("Radhe Test");
    await page.waitForTimeout(1000);

    const enter_addInfo_add= page.locator("//input[@name='address']");
    await enter_addInfo_add.waitFor({state:'visible'});
    await enter_addInfo_add.fill("300 SUNSHINE ACRES TRL");
    await page.waitForTimeout(1000);

    const enter_addInfo_city= page.locator("//input[@name='city']");
    await enter_addInfo_city.waitFor({state:'visible'});
    await enter_addInfo_city.fill("ROYAL");
    await page.waitForTimeout(1000);

    const enter_addInfo_state= page.locator("//input[@id='state']");
    await enter_addInfo_state.waitFor({state:'visible'});
    await enter_addInfo_state.fill("AK");
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);


    const enter_addInfo_zip= page.locator("//input[@name='zip']");
    await enter_addInfo_zip.waitFor({state:'visible'});
    await enter_addInfo_zip.fill("71968");
    await page.waitForTimeout(1000);

    const enter_addInfo_savebtn= page.locator("(//button[contains(text(),'Save')])[2]");
    await enter_addInfo_savebtn.waitFor({state:'visible'});
    await enter_addInfo_savebtn.click();
    await page.waitForTimeout(3000);

    const milage_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(7);
    await milage_txtbox.waitFor({state:'visible'});
    await milage_txtbox.click();
    await milage_txtbox.fill("230");
    await page.waitForTimeout(1000);

    const odom_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(8);
    await odom_txtbox.waitFor({state:'visible'});
    await odom_txtbox.click();
    await odom_txtbox.fill("3500");
    await page.waitForTimeout(1000);

    const price_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(9);
    await price_txtbox.waitFor({state:'visible'});
    await price_txtbox.click();
    await price_txtbox.fill("1500");
    await page.waitForTimeout(1000);

    //Seller addres button 
    const sellerAdd_btn= page.locator("//button[contains(text(),'Enter Address')]"); 
    await mailToadd_btn.waitFor({state:'visible'});
    await mailToadd_btn.click();
    await page.waitForTimeout(2000);

    const resuable_add= page.locator('div.MuiGrid-root div.MuiFormControl-root div.MuiAutocomplete-root div.MuiFormControl-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(0);
    await resuable_add.waitFor({state:'visible'});
    await resuable_add.click();
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);

    const seller_add_savebtn= page.locator("(//button[contains(text(),'Save')])[2]");
    await seller_add_savebtn.waitFor({state:'visible'});
    await seller_add_savebtn.click();
    await page.waitForTimeout(2000);

    const titleNUM_txtbox= page.locator('div.MuiGrid-root div.MuiInputBase-root input.MuiInputBase-input[aria-invalid="false"]').nth(10);
    await titleNUM_txtbox.waitFor({state:'visible'});
    await titleNUM_txtbox.click();
    await titleNUM_txtbox.fill("123");
    await page.waitForTimeout(2000);

    const submission_btn= page.locator("//button[contains(text(),'Submissions')]");
    await submission_btn.waitFor({state:'visible'});
    await submission_btn.click();

    await page.waitForTimeout(6000);

    // Submission window action starts here:

    // const uploadIcon1= page.locator("svg.MuiSvgIcon-root[data-testid='UploadIcon']").nth(0);
    // await uploadIcon1.click();
    const firstUpload= page.locator("input[type='file']").nth(0);
    await firstUpload.waitFor({state:'attached'});
    await firstUpload.setInputFiles('./test-data/Bill.pdf',{force:true});
    await page.waitForTimeout(3000);

    // const uploadIcon2= page.locator("svg.MuiSvgIcon-root[data-testid='UploadIcon']").nth(1);
    // await uploadIcon2.click();
    const secondUpload= page.locator("input[type='file']").nth(1);
    await secondUpload.waitFor({state:'attached'});
    await secondUpload.setInputFiles('./test-data/Bill.pdf',{force:true});
    await page.waitForTimeout(3000);

    // const uploadIcon3= page.locator("svg.MuiSvgIcon-root[data-testid='UploadIcon']").nth(2);
    // await uploadIcon3.click();
    const thirdUpload= page.locator("input[type='file']").nth(2);
    await thirdUpload.waitFor({state:'attached'});
    await thirdUpload.setInputFiles('./test-data/Bill.pdf',{force:true});
    await page.waitForTimeout(3000);

    const summary_btn= page.locator("//button[contains(text(),'Summary')]");
    await summary_btn.waitFor({state:'visible'});
    await summary_btn.click();

    await page.waitForTimeout(5000);

    const createOrder_btn= page.locator("(//button[contains(text(),'Create Order')])[2]");
    await createOrder_btn.waitFor({state:'visible'});
    await createOrder_btn.click();

    await page.waitForTimeout(6000);

    const invoiceNum_element= page.locator("//p[@class='MuiTypography-root MuiTypography-body1 css-hv3ztn-MuiTypography-root']");
    const actual_InvoiceNum=  await invoiceNum_element.allTextContents();

    console.log('Invoice Created Successfully::'+ actual_InvoiceNum);

    const inv_num_string=await actual_InvoiceNum.toString();
    const inv_actual_num= await inv_num_string.split(":");
    const inv_workingNum= await inv_actual_num[1];
    await console.log("Workable Invoice Number"+inv_workingNum);

    const viewInvoice_btn= page.locator("//button[contains(text(),'View Invoice')]");
    await viewInvoice_btn.waitFor({state:'visible'});
    await viewInvoice_btn.click();

    await page.waitForTimeout(6000);

});