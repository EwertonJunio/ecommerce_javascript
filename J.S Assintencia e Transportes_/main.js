const catalogo = [
    { id: 1, nome: "Táxi/40 km", Marca: "Serviços", preco: 80, nomeArquivoImagem: "taxi.jpeg" },
    { id: 2, nome: "Troca de Pneu", Marca: "Serviços", preco: 50, nomeArquivoImagem: "troca de pneu.jpeg" },
    { id: 3, nome: "Carga de Bateria", Marca: "Serviços", preco: 50, nomeArquivoImagem: "carga de bateria.jpeg" }

];

let carrinho = [];

function adicionarAoCarrinho(id) {
    const produto = catalogo.find(p => p.id === id);
    if (produto) {
        carrinho.push(produto);
        alert(`Adicionado ao carrinho: ${produto.nome} - ${produto.Marca}`);
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    const divCarrinho = document.getElementById("carrinho");
    divCarrinho.innerHTML = `<h2>Itens no Carrinho: ${carrinho.length}</h2>`;
    carrinho.forEach(item => {
        divCarrinho.innerHTML += `<p>${item.nome} - ${item.Marca} - $${item.preco}</p>`;
    });
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    divCarrinho.innerHTML += `<strong>Total: $${total}</strong>`;
}

document.addEventListener("DOMContentLoaded", function() {
    const containerProduto = document.getElementById("container-produto");
    catalogo.forEach(produto => {
        containerProduto.innerHTML += `
        <div class="card-produto" id="card-produto-${produto.id}">
            <img class="produto-imagem" src="./assets/img/${produto.nomeArquivoImagem}" alt="Produto ${produto.id}" />
            <p class="produto-marca">${produto.Marca}</p>
            <p class="produto-nome">${produto.nome}</p>
            <p class="produto-preco">$${produto.preco}</p>
            <button class="btn-adicionar" onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
        </div>`;
    });
});