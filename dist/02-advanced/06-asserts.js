function assertDisplayMenu(user) {
    if (!user.displayName)
        throw new Error("error");
}
function logUserByDisplayName(user) {
    assertDisplayMenu(user);
    console.log(user.displayName.toLowerCase());
}
export {};
//# sourceMappingURL=06-asserts.js.map