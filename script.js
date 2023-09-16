function beforeSubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputDate.value", inputdate.value); //string --> date (en_US)
    //conversion of date & satore it in salesforce org , convert the date as per your locale
    //System.debug(UserInfo.getLocale()); to get locale

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formattedDate;
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    } 
} 
setInterval(timestamp, 500);