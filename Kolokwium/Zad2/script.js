class User {
  constructor(login, email, password) {
    this.login = login;
    this.email = email;
    this.password = password;
  }

  changePassword(oldPassword, newPassword) {
    if (this.password === oldPassword) {
      this.password = newPassword;
      return true;
    } else {
      return false;
    }
  }
}

var users = [];

function register() {
  var login = document.getElementById('login').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repeatPassword = document.getElementById('repeat-password').value;

  if (password === repeatPassword) {
    var user = new User(login, email, password);
    users.push(user);

    var row = document.createElement('tr');
    row.innerHTML = '<td>' + login + '</td><td>' + email + '</td><td>' + password + "</td>";
    document.getElementById('users-table').appendChild(row);
  } else {
    alert('Passwords do not match!');
  }
}