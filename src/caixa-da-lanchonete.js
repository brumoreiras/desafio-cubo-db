class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        // return "";
        let valorTotal = 0;
        let itensPrincipais = [];
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        };

        const formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];

        if (!formasDePagamentoValidas.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (cardapio[codigo] === undefined) {
                return "Item inválido!";
            }
            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }
            valorTotal += cardapio[codigo] * quantidade;

            if (codigo !== 'chantily' && codigo !== 'queijo') {
                itensPrincipais.push(codigo);
            }
        }

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (codigo === 'chantily' || codigo === 'queijo') {
                const itemPrincipal = codigo === 'chantily' ? 'cafe' : 'sanduiche';
                if (!itensPrincipais.includes(itemPrincipal)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
        }

        if (valorTotal === 0) {
            return "Não há itens no carrinho de compra!";
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03;
        }



        return `R$ ${(valorTotal.toFixed(2)).replace('.', ',')}`;
    }



}

export { CaixaDaLanchonete };
