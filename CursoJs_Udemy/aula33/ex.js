let produtos = [];

function adicionarProdutos(nome, preco, quantidade) {

    produtos.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    });

}

function listarProdutos() {
    console.log("Produtos cadastrados:");

    produtos.forEach((produto, index) => {
        console.log(`${index + 1}, Nome: ${produto.nome}, Quantidade: ${produto.quantidade}, Preço: R$${produto.preco.toFixed(2)}`);
    });
}

function calcularTotal() {
    console.log("Total dos produtos:");
    let total = 0;
    produtos.forEach((produto) => {
        total += produto.quantidade * produto.preco;
    })
    console.log(`Total: R$${total.toFixed(2)}`);
}

adicionarProdutos("Notebook", 3500, 2);
adicionarProdutos("Mouse", 80, 5);
adicionarProdutos("Teclado", 150, 3);

listarProdutos();

calcularTotal();