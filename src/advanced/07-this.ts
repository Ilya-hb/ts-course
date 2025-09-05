const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// <button onClick='handler'>Click me!</button>
function handler(this: HTMLButtonElement, e: Event) {
  this.disabled = true;
}
