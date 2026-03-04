# 🍔 PA Burger

Uma aplicação web moderna e interativa para uma hamburgueria artesanal. Este projeto Front-end foi construído inicialmente como uma landing page e evoluiu para uma aplicação dinâmica completa, com gestão de estado de carrinho e persistência de dados, focando na melhor experiência do utilizador (UX/UI).

## ✨ Funcionalidades

* **Catálogo Dinâmico:** Os produtos são renderizados dinamicamente no ecrã através de uma estrutura de dados em JavaScript.
* **Carrinho de Compras Avançado:** Gaveta lateral (Sidebar) interativa que permite adicionar produtos, alterar quantidades, remover itens individuais e esvaziar todo o carrinho. O cálculo do valor total da conta é feito em tempo real.
* **Persistência de Dados (LocalStorage):** Os itens adicionados ao carrinho são guardados na memória do navegador. O utilizador não perde o seu pedido mesmo se fechar a aba ou atualizar a página.
* **Checkout Inteligente (Integração WhatsApp):** O botão de finalizar compra formata automaticamente todo o pedido (itens, quantidades e valor total) e redireciona o utilizador para a API do WhatsApp, pronto para enviar a mensagem ao estabelecimento.
* **Busca e Filtros em Tempo Real:** Barra de pesquisa inteligente que filtra os produtos pelo nome.
* **Modal de Produto:** Janela centralizada que foca a atenção nos detalhes do hambúrguer e permite selecionar a quantidade antes de adicionar ao carrinho.
* **Design Responsivo e Menu Mobile:** A interface adapta-se a qualquer ecrã, com um Menu Hambúrguer lateral criado para dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido sem o uso de frameworks ou bibliotecas externas, garantindo o domínio dos fundamentos da web:

* **HTML5:** Estruturação semântica.
* **CSS3:** Estilização utilizando Flexbox, CSS Grid, variáveis e media queries para responsividade.
* **JavaScript (Vanilla JS):**
    * Manipulação do DOM.
    * Consumo e gestão de `localStorage`.
    * Integração com link building dinâmico (API WhatsApp).
    * Lógica de programação aplicada a Arrays e Objetos (`.filter()`, `.includes()`, `.reduce()`, `.forEach()`, `.find()`, `.splice()`).

## 🚀 Como executar o projeto

Como é um projeto Front-end nativo, não é necessário instalar dependências ou usar servidores complexos.

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/pedroantps/pa-burger.git](https://github.com/pedroantps/pa-burger.git)