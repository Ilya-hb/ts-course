type User = {
  name: string;
  displayName: string | null;
};

function assertDisplayMenu(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("error");
}

function logUserByDisplayName(user: User) {
  assertDisplayMenu(user);
  console.log(user.displayName.toLowerCase());
}
