let users = {};
let currentUser = "";

function createAccount() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("auth-message").textContent = "Please enter a username and password.";
    return;
  }

  if (users[username]) {
    document.getElementById("auth-message").textContent = "This account already exists.";
    return;
  }

  users[username] = {
    password: password,
    balance: 0
  };

  document.getElementById("auth-message").textContent = "Account created successfully. You can now login.";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!users[username]) {
    document.getElementById("auth-message").textContent = "Account not found. Please create an account.";
    return;
  }

  if (users[username].password !== password) {
    document.getElementById("auth-message").textContent = "Incorrect password.";
    return;
  }

  currentUser = username;
  document.getElementById("display-user").textContent = currentUser;
  document.getElementById("auth-section").classList.add("hidden");
  document.getElementById("bank-section").classList.remove("hidden");
  updateBalance();
}

function forgotPassword() {
  const username = document.getElementById("username").value;

  if (username === "") {
    document.getElementById("auth-message").textContent = "Enter your username first.";
    return;
  }

  if (!users[username]) {
    document.getElementById("auth-message").textContent = "No account found with that username.";
    return;
  }

  document.getElementById("auth-message").textContent = "Your password is: " + users[username].password;
}

function deposit() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    document.getElementById("bank-message").textContent = "Please enter a valid amount.";
    return;
  }

  users[currentUser].balance += amount;
  updateBalance();
  document.getElementById("bank-message").textContent = "Deposit successful.";
}

function withdraw() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0) {
    document.getElementById("bank-message").textContent = "Please enter a valid amount.";
    return;
  }

  if (amount > users[currentUser].balance) {
    document.getElementById("bank-message").textContent = "Insufficient funds.";
    return;
  }

  users[currentUser].balance -= amount;
  updateBalance();
  document.getElementById("bank-message").textContent = "Withdrawal successful.";
}

function showBalance() {
  document.getElementById("bank-message").textContent = "Your final balance is $" + users[currentUser].balance.toFixed(2);
}

function updateBalance() {
  document.getElementById("balance").textContent = users[currentUser].balance.toFixed(2);
  document.getElementById("amount").value = "";
}

function logout() {
  currentUser = "";
  document.getElementById("auth-section").classList.remove("hidden");
  document.getElementById("bank-section").classList.add("hidden");
  document.getElementById("auth-message").textContent = "";
  document.getElementById("bank-message").textContent = "";
}
