//armazena os nomes que já sairam
let nomesSorteados = [];

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
        lista.appendChild(item); // Adicionando nomes à lista

        inputAmigo.value = ""; // Limpando o input
    }

}

// Captura a tecla Enter e retorna a funçao adicionarAmigo
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function sortearAmigo(){
    let lista = document.getElementById("listaAmigos");
    let items = lista.getElementsByTagName("li");

    if (items.length < 2) {
        alert("Adicione pelo menos 2 amigos");
        console.log(items.length);
    } else if (nomesSorteados.length === items.length) {
        alert("Todos os nomes foram selecionados");
        console.log("Todos os nomes foram selecionados");
    } else {
        let amigoSorteado;
        do {
            // Seleciona um índice aleatório da lista de amigos
            let indiceAleatorio = Math.floor(Math.random() * items.length);
            amigoSorteado = items[indiceAleatorio].textContent;
        } while (nomesSorteados.includes(amigoSorteado));

        // Adiciona o nome sorteado ao array de nomes sorteados
        nomesSorteados.push(amigoSorteado);

        // Exibe o nome do amigo sorteado
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li style="color: green;">Amigo sorteado: ${amigoSorteado}</li>`;

        console.log("Amigo sorteado: " + amigoSorteado);
        
        // Limpa o resultado após 2 segundos
        setTimeout(() => {
            resultado.innerHTML = "";
        }, 2000);
    }
}