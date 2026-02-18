console.log("Login functionality is comming");

document.getElementById("login-btn").addEventListener("click", function () {
    // 1. get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // 2. get the pin input
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin);

    // 3. match pin and mobile number
    if(contactNumber === "01753037328" && pin === "1020" ){
        // 3.1 true:::>> alert> homepage
        alert("Login Successful");
        // window.location.replace("/home.html")
        window.location.assign('./home.html')
    }else{
        // 3.1 false:::>> alert> return
        alert("Login Failed");
        return;
    }
});
