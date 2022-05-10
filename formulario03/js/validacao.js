let inputNome = document.querySelector(".nomeClient");
inputNome.addEventListener("keydown", function (e) {
  if (e.key > "0" && e.key < "9") {
    e.preventDefault();
  }
});