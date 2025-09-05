"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=07-this.js.map