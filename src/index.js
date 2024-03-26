const prompt = require('prompt-sync')({sigint:true});
// Criei esse array para funcionar como armazenamento do carrinho
let carrinho = [];

// SEGUNDA TELA - Função para adicionar um produto, preço e quantidade ao carrinho

function adicionarProduto() {
    let nome = prompt("Informe o nome do produto:");
    let preco = parseFloat(prompt("Informe o preço do produto:"));
    let quantidade = parseInt(prompt("Informe a quantidade do produto:"));

    // Calcula o subtotal do produto
    let subtotal = preco * quantidade;

    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco, quantidade, subtotal });

  console.log(`Produto: ${nome}, foi adicionado ao carrinho.`); 
  console.log(`Valor por item: R$ ${preco} \n`);
}

// Função para exibir os itens do carrinho e o total da compra
function exibirCarrinho() {
    let mensagem = "Produtos no carrinho:";

    // Itera sobre os produtos no carrinho
    carrinho.forEach(produto => {
        mensagem += `Nome: ${produto.nome}\n`;
        mensagem += `Preço unitário: R$ ${produto.preco.toFixed(2)}\n`;
        mensagem += `Subtotal: R$ ${produto.subtotal.toFixed(2)}\n`;
    });

    // Para calcular o valor total da compra
    let total = carrinho.reduce((acc, produto) => acc + produto.subtotal, 0);

    mensagem += `Total da compra: R$ ${total.toFixed(2)}\n`;

    console.log(mensagem);
}

//PRIMEIRA TELA - Função principal para interação com o usuário
function main() {
    while (true) {
        let opcao = prompt("Escolha uma opção:\n1 - Adicionar produto ao carrinho\n2 - Visualizar carrinho\n3 - Finalizar compra\n4 - Sair \n");

        switch (opcao) {
            case "1":
                adicionarProduto();
                break;
            case "2":
                exibirCarrinho();
                break;
            case "3":
                console.log ("Compra finalizada. Supermercados Abner agradece pela compra");
                return;
            case "4":
                console.log ("Operação Finalizada com sucesso.");
                return;
            default:
                console.log ("Opção inválida. Por favor, escolha uma opção entre '1' e '4'.");
        }
    }
}

// Inicia o programa
main();