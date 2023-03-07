class Account {
    #name;
    balance;
    static accountInfoList = [];
    createAccount(name, balance) {
        this.#name = name;
        this.balance = parseInt(balance);
    }
    getName() {
        return this.#name;
    }
    getBalance() {
        return parseInt(this.balance);
    }
}
let action = "void";
window.onload = function() {
    let createAccountButton = document.getElementById("createAccount");
    createAccountButton.onclick = createAccount;

    let depositButton = document.getElementById("initiateDeposit");
    depositButton.onclick = function() { showTransactionPage(depositButton.value) };
    let debitButton = document.getElementById("initiateDebit");
    debitButton.onclick = function() { showTransactionPage(debitButton.value) };

    let addedAccountList = document.getElementById("addedAccountList");
    addedAccountList.onchange = function() { 
        if(addedAccountList.value != 'default') {
            document.getElementById("transaction").disabled = false;
        } else {
            document.getElementById("transaction").disabled = true;
        }
    };

    let transaction = document.getElementById("transaction");
    transaction.onclick = processTransaction;
}
function createAccount() {
    const account = new Account();
    account.createAccount(document.getElementById("name").value, document.getElementById("amount").value);
    Account.accountInfoList.push(account);
    document.getElementById("accountList").innerHTML = concatAccountInfo();
    document.getElementById("name").value = '';
    document.getElementById("amount").value = '';
}
function showTransactionPage(source) {
    document.getElementById("transactionLabel").innerHTML = source + ":";
    document.getElementById("accountSection").classList.add("hidden");
    document.getElementById("transactionSection").classList.remove("hidden");
    let selectTag = document.getElementById('addedAccountList');
    for (i = selectTag.options.length - 1; i >0; --i){
        selectTag.remove(i);
    }
    Account.accountInfoList.map((element, i) => {
        let opt = document.createElement("option");
        opt.value = element.getName();
        opt.innerHTML = element.getName();
        selectTag.append(opt);
    });
    action = source;
}
function processTransaction() {
    if(action != "void") {
        Account.accountInfoList.find((item, i) => {
            if (item.getName() === document.getElementById("addedAccountList").value) {
                Account.accountInfoList[i].balance = action == 'Deposit' ? item.getBalance() + parseInt(document.getElementById("transactionAmount").value) : (item.getBalance() > parseInt(document.getElementById("transactionAmount").value) ? item.getBalance() - parseInt(document.getElementById("transactionAmount").value) : 0);
                return true; // stop searching
            }
        });
        document.getElementById("transactionAmount").value = '';
        document.getElementById("accountList").innerHTML = concatAccountInfo();

        document.getElementById("accountSection").classList.remove("hidden");
        document.getElementById("transaction").disabled = true;
        document.getElementById("transactionSection").classList.add("hidden");
    }
}
function concatAccountInfo() {
    let result = '';
    Account.accountInfoList.forEach(element => {
        result += 'Account name: ' + element.getName() + ' Balance: ' + element.getBalance() + '\n';
    })
    return result;
}