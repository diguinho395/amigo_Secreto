//função adicionar amigos
function adicionarAmigo() {
    //recebendo valores do input amigo
    let inputAmigo = document.getElementById("amigo");
    let textoInput = inputAmigo.value;

    //add nomes as listas
    if (textoInput.trim() !== "") {
        let lista = document.getElementById("listaAmigos"); // Pegando a lista
        let item = document.createElement("li"); // Criando um item de lista
        item.textContent = textoInput;
        lista.appendChild(item); // Adicionando o item à lista

        inputAmigo.value = ""; // Limpando o input
    }

}

// Captura a tecla Enter e retorna a funçao adicionarAmigo
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

//função adicionar amigos
function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo")
    let textoInput = inputAmigo.value
    console.log(textoInput)
}