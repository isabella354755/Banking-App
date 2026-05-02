body {
  margin: 0;
  background: #dfe5ec;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

.phone {
  width: 375px;
  min-height: 700px;
  background: white;
  border-radius: 35px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  border: 8px solid #111;
}

.top {
  background: #143c7d;
  color: white;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.lock {
  font-size: 20px;
}

.top a {
  color: white;
  font-size: 11px;
  text-align: center;
}

.page {
  padding: 28px;
}

h2 {
  color: #1c1c1c;
  margin-bottom: 25px;
}

label {
  display: block;
  margin-top: 18px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #111;
}

input {
  width: 100%;
  padding: 14px;
  border: 1px solid #777;
  border-radius: 3px;
  font-size: 16px;
  box-sizing: border-box;
}

.password-box {
  display: flex;
  border: 1px solid #777;
}

.password-box input {
  border: none;
}

.password-box button {
  border: none;
  background: white;
  color: #005eb8;
  padding: 0 12px;
  text-decoration: underline;
  cursor: pointer;
}

.remember {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}

.remember input {
  width: 25px;
  height: 25px;
}

.main-btn {
  width: 100%;
  margin-top: 25px;
  padding: 14px;
  background: #0b8f69;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.main-btn:hover {
  background: #067655;
}

.text-btn {
  width: 100%;
  margin-top: 14px;
  background: none;
  border: none;
  color: #143c7d;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
}

.logout-btn {
  width: 100%;
  margin-top: 15px;
  padding: 14px;
  background: #8b0000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.balance-card {
  background: #f0f4f8;
  border-left: 5px solid #143c7d;
  padding: 18px;
  margin-bottom: 20px;
}

.balance-card p {
  margin: 0;
  color: #555;
}

.balance-card h1 {
  margin: 10px 0 0;
  color: #143c7d;
}

.hidden {
  display: none;
}

#loginMessage,
#bankMessage {
  font-weight: bold;
  margin-top: 18px;
  color: #143c7d;
}
