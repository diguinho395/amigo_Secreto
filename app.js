//função adicionar amigos
function adicionarAmigo() {
    //recebendo valores do input amigo
    let inputAmigo = document.getElementById("amigo");
    let textoInput = inputAmigo.value;

    //add nomes as listas
    if (textoInput.trim() !== "") {
        let lista = document.getElementById("lista-amigos"); // Pegando a lista
        let item = document.createElement("li"); // Criando um item de lista
        item.textContent = textoInput;
        lista.appendChild(item); // Adicionando o item à lista

        inputAmigo.value = ""; // Limpando o input
    }
}
