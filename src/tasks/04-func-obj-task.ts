// Создайте интерфейсы User и Admin.

// User должен содержать следующие ключи:
// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.

// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}
interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: "Login1234",
  email: "email1234",
  password: "1234123123",
  isOnline: false,
  lastVisited: new Date(2022, 6, 28),
};

const admin1: Admin = {
  login: "Login1234",
  email: "email1234",
  password: "1234123123",
  isOnline: false,
  lastVisited: new Date(2022, 6, 28),
  role: "Superadmin",
};

function login(user: { login: string; password: string }): void {
  if (user.login && user.password)
    console.log(
      `Welcome, your login is: ${user.login} and your password is ${user.password.length} length`
    );
  else console.log("Please provide all data");
}

login({ login: "bebra", password: "sdf" });
login(user1);
login(admin1);

login({ login: "bebra", password: "" });
