function beforeSubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputDate.value", inputdate.value); //string --> date (en_US)
    //conversion of date & satore it in salesforce org , convert the date as per your locale
    //System.debug(UserInfo.getLocale()); to get locale

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;
}