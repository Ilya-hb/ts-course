// Создайте интерфейсы User и Admin.
const user1 = {
    login: "Login1234",
    email: "email1234",
    password: "1234123123",
    isOnline: false,
    lastVisited: new Date(2022, 6, 28),
};
const admin1 = {
    login: "Login1234",
    email: "email1234",
    password: "1234123123",
    isOnline: false,
    lastVisited: new Date(2022, 6, 28),
    role: "Superadmin",
};
function login(user) {
    if (user.login && user.password)
        console.log(`Welcome, your login is: ${user.login} and your password is ${user.password.length} length`);
    else
        console.log("Please provide all data");
}
login({ login: "bebra", password: "sdf" });
login(user1);
login(admin1);
login({ login: "bebra", password: "" });
export {};
//# sourceMappingURL=04-func-obj-task.js.map