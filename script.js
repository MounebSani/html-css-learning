const button = document.querySelector("button");

const message = document.querySelector("#message");

const username = document.querySelector("#username");

button.addEventListener("click", () => {
  message.textContent =
    "Welcome " + username.value;
});
