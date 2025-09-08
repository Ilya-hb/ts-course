"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function request(url) {
    const response = await fetch(url);
    return response.json();
}
const data = request("asdasd");
//# sourceMappingURL=06-default-type.js.map