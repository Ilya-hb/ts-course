"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertDisplayMenu(user) {
    if (!user.displayName)
        throw new Error("error");
}
function logUserByDisplayName(user) {
    assertDisplayMenu(user);
    console.log(user.displayName.toLowerCase());
}
//# sourceMappingURL=06-asserts.js.map