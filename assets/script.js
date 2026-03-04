// Array contendo os nossos produtos
const produtos = [
    { 
        id: 1, 
        nome: 'Burger do PA',
        descricao: 'O clássico burger do PA, com carne suculenta, queijo derretido, alface fresca e molho especial. Uma explosão de sabor em cada mordida!',
        categoria: 'Burger', 
        preco: 'R$ 19,90', 
        imagem: './assets/burgers/burger1.png', 
        promocao: true 
    },
    { 
        id: 2, 
        nome: 'Burger Bacon', 
        descricao: 'O irresistível Burger Bacon, com carne suculenta, queijo derretido, alface fresca, molho especial e crocantes fatias de bacon. Uma combinação perfeita de sabores para os amantes de bacon!',
        categoria: 'Burger', 
        preco: 'R$ 22,90', 
        imagem: './assets/burgers/burger2.png', 
        promocao: false 
    },
    { 
        id: 3, 
        nome: 'Burger Salada',
        descricao: 'O leve e refrescante Burger Salada, com carne suculenta, queijo derretido, alface fresca, tomate suculento e molho especial. Uma opção deliciosa para quem busca um burger mais leve e cheio de sabor!', 
        categoria: 'Burger', 
        preco: 'R$ 18,90', 
        imagem: './assets/burgers/burger3.png', 
        promocao: false 
    },
    { 
        id: 4, 
        nome: 'Burger Tudo', 
        descricao: 'O Burger Tudo, a escolha definitiva para os amantes de burgers, com carne suculenta, queijo derretido, alface fresca, tomate suculento, cebola caramelizada, bacon crocante e molho especial. Uma explosão de sabores em cada mordida!',
        categoria: 'Burger', 
        preco: 'R$ 28,90', 
        imagem: './assets/burgers/burger4.png', 
        promocao: false 
    },
    { 
        id: 5, 
        nome: 'Batata Frita', 
        descricao: 'Batata frita crocante e dourada, pronta para ser servida com molho especial. Uma opção clássica e irresistível!',
        categoria: 'Acompanhamento', 
        preco: 'R$ 9,90', 
        imagem: './assets/burgers/batata.png', 
        promocao: false 
    },
    { 
        id: 6, 
        nome: 'Coca-Cola Zero', 
        descricao: 'Coca-Cola Zero, sem açúcar e com o sabor original da Coca-Cola. Uma bebida refrescante e perfeita para complementar qualquer refeição!',
        categoria: 'Bebida', 
        preco: 'R$ 6,90', 
        imagem: './assets/burgers/cocazero.png', 
        promocao: false 
    }
];

let carrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];

function salvarMemoria() {
    localStorage.setItem('meuCarrinho', JSON.stringify(carrinho));
}

function fecharTudo() {
    document.getElementById('sidebar-carrinho').classList.remove('aberta');
    document.querySelector('header nav').classList.remove('menu-aberto');
    document.getElementById('overlay').style.display = 'none';

    const menuContainer = document.querySelector('.menu');
    if (menuContainer) {
        menuContainer.style.display = ''; 
        menuContainer.classList.remove('fixo');
    }
}

function toggleMenu() {
    const nav = document.querySelector('header nav');
    const overlay = document.getElementById('overlay');
    const menuContainer = document.querySelector('.menu');
    
    nav.classList.toggle('menu-aberto');
    
    menuContainer.classList.toggle('fixo'); 
    
    if(nav.classList.contains('menu-aberto')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

const linksMenu = document.querySelectorAll('header nav .leftside a');
linksMenu.forEach(link => {
    link.addEventListener('click', fecharTudo);
});

const gridProdutos = document.querySelector('.products-grid');

const campoBusca = document.querySelector('.search input');
const filtroCategoria = document.querySelector('.search select');

// Função para renderizar (desenhar) os produtos no ecrã
function mostrarProdutos(lista) {
    gridProdutos.innerHTML = ''; 

    lista.forEach(produto => {
        const tagPromocao = produto.promocao ? `<div class="warning">Promoção</div>` : '';

        const htmlProduto = `
            <div class="product-item" onclick="abrirProduto(${produto.id})" style="cursor: pointer;">
                ${tagPromocao}
                <div class="photo">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="info">
                    <div class="product-category">${produto.categoria}</div>
                    <div class="product-name">${produto.nome}</div>
                    <div class="product-price">${produto.preco}</div>
                </div>
            </div>
        `;
        gridProdutos.innerHTML += htmlProduto;
    });
}

// LÓGICA DA ABA LATERAL DO CARRINHO
const overlay = document.getElementById('overlay');
const sidebarCarrinho = document.getElementById('sidebar-carrinho');

function abrirCarrinho() {
    fecharTudo();
    
    document.getElementById('sidebar-carrinho').classList.add('aberta');
    document.getElementById('overlay').style.display = 'block';
    document.querySelector('.menu').style.display = 'none';
}

let modalQt = 1;
let produtoAtual = null;

function abrirProduto(idProduto) {
    produtoAtual = produtos.find(p => p.id === idProduto);
    
    modalQt = 1; 

    document.getElementById('modal-img').src = produtoAtual.imagem;
    document.getElementById('modal-nome').innerHTML = produtoAtual.nome;
    document.getElementById('modal-desc').innerHTML = produtoAtual.descricao;
    document.getElementById('modal-preco').innerHTML = produtoAtual.preco;
    document.getElementById('modal-qt-num').innerHTML = modalQt;

    document.getElementById('modal-overlay').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

function mudarQt(valor) {
    modalQt += valor;
    
    if (modalQt < 1) {
        modalQt = 1;
    }
    
    document.getElementById('modal-qt-num').innerHTML = modalQt;

}

function adicionarAoCarrinho() {
    if (produtoAtual === null) {
        return; 
    }

    const itemExistente = carrinho.find(item => item.id === produtoAtual.id);

    if (itemExistente) {
        itemExistente.quantidade += modalQt;
    } else {
        carrinho.push({
            id: produtoAtual.id,
            nome: produtoAtual.nome,
            preco: produtoAtual.preco,
            imagem: produtoAtual.imagem,
            quantidade: modalQt
        });
    }

    atualizarContadorCarrinho();
    atualizarCarrinhoVisual();
    salvarMemoria();
    fecharModal();
}

function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    
    document.getElementById('cart-contador').innerHTML = totalItens;
}

mostrarProdutos(produtos);

function filtrarProdutos() {
    const termoBusca = campoBusca.value.toLowerCase();
    const categoriaSelecionada = filtroCategoria.value;

    const produtosFiltrados = produtos.filter(produto => {
        const nomeMatch = produto.nome.toLowerCase().includes(termoBusca);
        const categoriaMatch = categoriaSelecionada === '' || produto.categoria === categoriaSelecionada;
        return nomeMatch && categoriaMatch;
    })
    mostrarProdutos(produtosFiltrados);
}

campoBusca.addEventListener('input', filtrarProdutos);
filtroCategoria.addEventListener('change', filtrarProdutos);

function atualizarCarrinhoVisual() {
    const containerCarrinho = document.getElementById('itens-carrinho');
    const elementoTotal = document.getElementById('valor-total');
    
    containerCarrinho.innerHTML = '';
    let valorTotalConta = 0;

    if (carrinho.length === 0) {
        containerCarrinho.innerHTML = '<p style="text-align:center; color:#777; margin-top:30px;">O seu carrinho está vazio.</p>';
        elementoTotal.innerHTML = 'R$ 0,00';
        return; 
    }

    carrinho.forEach((item, index) => {
        let precoNumero = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
        
        let subtotal = precoNumero * item.quantidade;
        valorTotalConta += subtotal; 


        containerCarrinho.innerHTML += `
            <div class="cart-item">
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="cart-item-info">
                    <div class="cart-item-topo">
                        <h4>${item.nome}</h4>
                        <button class="remover-item-btn" onclick="removerItemCarrinho(${index})">X</button>
                    </div>
                    <p>${item.preco}</p>
                    <div class="cart-item-qt">
                        <button onclick="alterarQuantidadeCarrinho(${index}, -1)">-</button>
                        <span>${item.quantidade}</span>
                        <button onclick="alterarQuantidadeCarrinho(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    elementoTotal.innerHTML = `R$ ${valorTotalConta.toFixed(2).replace('.', ',')}`;

}

function alterarQuantidadeCarrinho(indexDoItem, valor) {
    carrinho[indexDoItem].quantidade += valor;
    
    if (carrinho[indexDoItem].quantidade < 1) {
        carrinho.splice(indexDoItem, 1);
    }

    atualizarContadorCarrinho();
    atualizarCarrinhoVisual();
    salvarMemoria();
}

function removerItemCarrinho(indexDoItem) {
    carrinho.splice(indexDoItem, 1); 
    salvarMemoria();
    atualizarContadorCarrinho();
    atualizarCarrinhoVisual();
}

function esvaziarCarrinho() {
    if (carrinho.length === 0) return; 

        carrinho = []; 
        salvarMemoria(); 
        atualizarContadorCarrinho();
        atualizarCarrinhoVisual();
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        return;
    }
    const numeroWhatsapp = '5524999838328';
    let mensagem = 'Olá, gostaria de fazer um pedido:\n\n';

    carrinho.forEach(item => {
        mensagem += `- ${item.nome} x${item.quantidade}\n`;
    });
    
    mensagem += '\nTotal: ' + document.getElementById('valor-total').innerText;
    mensagem += '\nEndereço de entrega: [Insira seu endereço aqui]';
    mensagem += '\nForma de pagamento: [Insira a forma de pagamento aqui]';

    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsapp, '_blank');

    esvaziarCarrinho();
}

atualizarContadorCarrinho();
atualizarCarrinhoVisual();