let carrinho = [];
let totalCarrinho = 0;

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    totalCarrinho += preco;
    atualizarCarrinho();
    alert(`${nome} foi adicionado ao carrinho!`);
}

// Atualiza a exibição do carrinho
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const carrinhoCount = document.getElementById('carrinho-count');
    itensCarrinho.innerHTML = ''; // Limpa o conteúdo atual
    carrinho.forEach((item, index) => {
        itensCarrinho.innerHTML += `<div class="carrinho-item">${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button></div>`;
    });
    carrinhoCount.innerText = carrinho.length;
    document.getElementById('total-carrinho').innerText = totalCarrinho.toFixed(2);
}

// Função para remover itens do carrinho
function removerDoCarrinho(index) {
    totalCarrinho -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para buscar pizzas na lista
function searchPizzas() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const pizzas = document.querySelectorAll('.sub-grid');

    pizzas.forEach(pizza => {
        const pizzaName = pizza.querySelector('.h2-sub-grid').textContent.toLowerCase();
        if (pizzaName.includes(searchInput)) {
            pizza.style.display = 'block'; // Mostra a pizza se o nome incluir o texto da pesquisa
        } else {
            pizza.style.display = 'none'; // Esconde a pizza se não incluir
        }
    });
}

// Função para finalizar a compra (ainda não implementado)
function finalizarCompra() {
    alert('Finalizando compra...');
}

// Função para abrir o modal do carrinho
document.getElementById('carrinho-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('modal-carrinho').style.display = "block";
});

// Função para fechar o modal do carrinho
function fecharCarrinho() {
    document.getElementById('modal-carrinho').style.display = "none";
}

// Fecha o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal-carrinho');
    if (event.target === modal) {
        fecharCarrinho();
    }
};
