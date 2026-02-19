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
        setBalance(newBalance);

        // 1. history-container ta ke niye ashbo
        const history = document.getElementById("history-container");

        // 2. new div create korbo
        const newDiv = document.createElement("div");

        // 3. oi div e innerHTML add korbo
        newDiv.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 flex justify-between items-center rounded-xl">
                    <div class=" flex gap-4 items-center">
                        <img class="h-full" src="./assets/opt-1.png" alt="">
                        <p class="text-xs">Add Money from ${bankAccount}, <br>acc-no ${accno} at ${new Date()}</p>

                    </div>
                    <div><i class="fa-solid fa-ellipsis"></i></div>
                </div>
        `;
        // 4. history-container e new div ta append kore dibo
        history.append(newDiv);
    } else {
        alert("Wrong Pin");
        return;
    }
});
