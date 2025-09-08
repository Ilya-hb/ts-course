const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
// <button onClick='handler'>Click me!</button>
function handler(e) {
    this.disabled = true;
}
export {};
//# sourceMappingURL=07-this.js.map