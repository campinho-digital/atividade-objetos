// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarProduto() {
    let nome = prompt("Informe o nome do produto:");
    let preco = parseFloat(prompt("Informe o preço do produto:"));
    let quantidade = parseInt(prompt("Informe a quantidade do produto:"));

    // Calcula o subtotal do produto
    let subtotal = preco * quantidade;

    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco, quantidade, subtotal });

    alert(`Produto "${nome}" adicionado ao carrinho.`);
}

// Função para exibir os itens do carrinho e o total da compra
function exibirCarrinho() {
    let mensagem = "Produtos no carrinho:\n\n";

    // Itera sobre os produtos no carrinho
    carrinho.forEach(produto => {
        mensagem += `Nome: ${produto.nome}\n`;
        mensagem += `Preço unitário: R$ ${produto.preco.toFixed(2)}\n`;
        mensagem += `Quantidade: ${produto.quantidade}\n`;
        mensagem += `Subtotal: R$ ${produto.subtotal.toFixed(2)}\n\n`;
    });

    // Calcula o valor total da compra
    let total = carrinho.reduce((acc, produto) => acc + produto.subtotal, 0);

    mensagem += `Total da compra: R$ ${total.toFixed(2)}`;

    alert(mensagem);
}

// Função principal para interação com o usuário
function main() {
    while (true) {
        let opcao = prompt("Escolha uma opção:\n1 - Adicionar produto ao carrinho\n2 - Visualizar carrinho\n3 - Finalizar compra\n4 - Sair");

        switch (opcao) {
            case "1":
                adicionarProduto();
                break;
            case "2":
                exibirCarrinho();
                break;
            case "3":
                alert("Compra finalizada. Obrigado por comprar conosco!");
                return;
            case "4":
                alert("Sessão encerrada.");
                return;
            default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

// Inicia o programa
main();