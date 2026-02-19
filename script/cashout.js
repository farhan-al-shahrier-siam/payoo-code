document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1. get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }

    // 2. get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3. get the current balance, validate, convert to number
    const currentBalance = getBalance()

    // 4. Calculate Balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    // 5. get the pin and verify
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1020") {
        alert("Cashout Successful");
        setBalance(newBalance);
    } else {
        alert("Invalid Pin");
        return;
    }
});

/* document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1. get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }

    // 2. get the amount, validate, convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // 3. get the current balance, validate, convert to number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4. calculate new balance
    const newbalance = Number(balance) - Number(cashoutAmount);
    if (newbalance < 0) {
        alert("Invalid Amount");
        return;
    }

    // 5. get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === "1020") {
        // 5.1 true:: show an alert > set balance
        alert("Cashout Successful")
        console.log("new balance: ", newbalance);
        balanceElement.innerText = newbalance
    } else {
        // 5.2 false:: show an error alert > return
        alert("Invalid Pin");
        return;
    }
});
 */
