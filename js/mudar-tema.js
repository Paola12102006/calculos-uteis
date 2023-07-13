
const buttonTema = document.getElementById('mudarTema')
buttonTema.addEventListener("click", () => {

    const body = document.querySelector("body")
    const imagemBotaoTrocaDeTema = document.querySelector(".img_button");
    const modoEscuroEstaAtivo = body.classList.contains("dark");

    body.classList.toggle("dark");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/979/979585.png")
        imagemBotaoTrocaDeTema.setAttribute("alt", "Imagem do Sol.")
    }
    else {
        imagemBotaoTrocaDeTema.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/581/581550.png");
        imagemBotaoTrocaDeTema.setAttribute("alt", "Imagem da Lua.")
    }
})
