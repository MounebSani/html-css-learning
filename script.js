const button = document.querySelector("button");

const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Style changed!";

  message.style.color = "darkblue";

  message.style.fontSize = "30px";
});
