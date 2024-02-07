var clickCount = 0;
var eggVisible = false;

var clickButton = document.getElementById("clickButton");
var egg = document.getElementById("egg");
var youWin = document.getElementById("you-win");

clickButton.addEventListener("click", function() {
    clickCount++;

    // Atualiza o contador exibido na página
    document.getElementById("counter").textContent = clickCount;

    // Verifica se o número de cliques está entre 1000 e 1010
    if (clickCount >= 100 && clickCount <= 110) {
        egg.style.display = "inline-block"; // Mostra o ovo
        eggVisible = true;
    }

    // Verifica se o número de cliques é igual a 1500
    if (clickCount === 150) {
        clickButton.style.display = "none"; // Esconde o botão
        egg.style.display = "none"; // Esconde o ovo
        youWin.style.display = "block"; // Mostra "You win!"
    }
});