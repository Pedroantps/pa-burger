# 🍔 PA Burger

Uma aplicação web moderna e interativa para uma hamburgueria artesanal. Este projeto Front-end foi construído inicialmente como uma landing page e evoluiu para uma aplicação dinâmica com carrinho de compras, focando na melhor experiência do utilizador (UX/UI).

## ✨ Funcionalidades

* **Catálogo Dinâmico:** Os produtos são renderizados dinamicamente no ecrã através de uma estrutura de dados em JavaScript, simulando o consumo de uma API.
* **Carrinho de Compras Funcional:** Gaveta lateral (Sidebar) interativa que permite adicionar produtos, alterar quantidades, remover itens e calcular o valor total da conta em tempo real.
* **Busca e Filtros em Tempo Real:** Barra de pesquisa inteligente que filtra os produtos pelo nome e pela categoria instantaneamente enquanto o utilizador digita.
* **Modal de Produto:** Janela centralizada (Modal) que foca a atenção nos detalhes do hambúrguer e permite selecionar a quantidade desejada antes de adicionar ao carrinho.
* **Design Responsivo e Menu Mobile:** A interface adapta-se a qualquer ecrã, com um Menu Hambúrguer lateral (Off-canvas) criado para dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido sem o uso de bibliotecas externas, garantindo o domínio dos fundamentos da web:

* **HTML5:** Estruturação semântica avançada.
* **CSS3:** Estilização utilizando Flexbox e CSS Grid para layouts complexos, variáveis e media queries para responsividade.
* **JavaScript (Vanilla JS):**
    * Manipulação profunda do DOM (Document Object Model).
    * Event Listeners para interatividade e animações das gavetas (Sidebars) e Modais.
    * Lógica de programação aplicada a Arrays e Objetos (métodos como `.filter()`, `.includes()`, `.reduce()`, `.forEach()` e `.find()`).

## 🚧 Próximos Passos (Em Desenvolvimento)

- [ ] Simulação de Checkout consumindo uma API (Mock) para validar pagamentos fictícios com cartão de crédito.
- [ ] Implementação de `localStorage` para não perder os itens do carrinho ao atualizar a página.

## 🚀 Como executar o projeto

Como é um projeto Front-end nativo, não é necessário instalar dependências ou usar servidores complexos.

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/pedroantps/pa-burger.git](https://github.com/pedroantps/pa-burger.git)