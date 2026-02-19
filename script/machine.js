console.log("Machine is added");

/* Machine id -> input value */
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

/* Machine -> balance */
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance: ", Number(balance));
    return Number(balance);
}

/* Machine value -> set balance */
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


/* Machine id > hide all > just show the id */
function showOnly(id){
    console.log("show only clicked")
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history")

    /* shobai ke hide kore doa */
    addMoney.classList.add("hidden")
    cashout.classList.add("hidden")
    history.classList.add("hidden")

    /* show only the selected id */
    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
}
