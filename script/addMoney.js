document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1. get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount === "Select A Bank") {
        alert("Please select a bank");
        return;
    }

    // 2. get bank account number
    const accno = getValueFromInput("add-money-number");
    if (accno.length != 11) {
        alert("Invalid acc Number");
        return;
    }

    // 3. get amount
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);

    // 4. Get pin
    const pin = getValueFromInput("add-money-pin");
    if (pin === "1020") {
        alert(`Money added successfully from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
    } else {
        alert("Wrong Pin")
        return;
    }
});
