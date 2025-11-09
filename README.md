# ⭐ Project Rating Interactive  
*Interactive rating component built with HTML, CSS & JavaScript.*

[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](#)
[![GitHub stars](https://img.shields.io/github/stars/andredantasti/project-rating-interactive?style=flat-square)](https://github.com/andredantasti/project-rating-interactive/stargazers)
[![Open issues](https://img.shields.io/github/issues/andredantasti/project-rating-interactive?style=flat-square)](https://github.com/andredantasti/project-rating-interactive/issues)

---

## 💡 Visão do Projeto  

O **Project Rating Interactive** é um componente de avaliação interativo no qual o usuário seleciona uma nota (de 1 a 5), envia sua resposta e visualiza uma tela de agradecimento mostrando a nota escolhida.  

O projeto foi construído inteiramente com **HTML**, **CSS** e **JavaScript puro**, sem frameworks ou bibliotecas externas.

---

## 🧰 Tecnologias Utilizadas  

- **HTML5** — estrutura semântica e acessível  
- **CSS3** — estilização responsiva e efeitos visuais  
- **JavaScript ES6+** — interatividade e manipulação do DOM  
- **LocalStorage** — armazenamento da nota entre páginas  

---

## 📂 Estrutura do Projeto  

project-rating-interactive/
│
├── css/
│ └── style.css ← estilos principais
│
├── images/
│ └── star.png ← ícone usado no layout
│
├── index.html ← página de seleção da nota
├── message.html ← página de agradecimento
│
├── js/
│ ├── rating.js ← lógica de seleção e salvamento da nota
│ └── message.js ← leitura e exibição da nota salva
│
└── README.md


---

## 🎬 Como Funciona  

1. O usuário acessa **index.html**, onde são exibidas as opções de nota (1–5).  
2. Ao clicar em uma nota:
   - A classe `.ativo` é aplicada no botão selecionado, mudando sua aparência.  
   - O valor da nota é salvo temporariamente em uma variável.  
3. Ao clicar em **Submit**:
   - Verifica-se se uma nota foi selecionada.  
   - O valor é salvo no `localStorage` usando a chave `"nota"`.  
   - O usuário é redirecionado para **message.html**.  
4. Em **message.html**, o script lê o valor salvo e exibe:  
   > “You selected 4 out of 5”  
   Após isso, o valor pode ser removido do `localStorage` para evitar repetição.

---

## ✅ Recursos Implementados  

- Interação visual com `classList.toggle()` e destaque ativo  
- Garantia de que apenas **uma nota** fica selecionada por vez  
- Validação antes de enviar o formulário  
- Uso de **localStorage** para comunicação entre páginas  
- Layout minimalista, moderno e responsivo  
- Código modular separado por arquivos (`rating.js` e `message.js`)

---

## 🚀 Como Executar Localmente  

```bash
# 1. Clone o repositório
git clone https://github.com/andredantasti/project-rating-interactive.git

# 2. Entre na pasta do projeto
cd project-rating-interactive

# 3. Abra o arquivo index.html no navegador

Escolha uma nota, clique em Submit e veja o resultado na tela de agradecimento.

🔧 Melhorias Futuras

Adicionar suporte a teclado e acessibilidade (ARIA)

Criar animações mais elaboradas (ex: fade ou pulse na seleção)

Armazenar notas em um backend (Node.js ou Firebase)

Converter o componente para React ou Web Component reutilizável

Adicionar testes automatizados com Jest/Cypress

🖼️ Exemplo Visual

(Adicione aqui uma imagem ou GIF mostrando o projeto em funcionamento)

![Preview do projeto](./images/rating.gif.gif)

📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aprimorados conceitos fundamentais de JavaScript e DOM, como:

Manipulação de eventos (addEventListener)

Uso de classList para alternar estados de elementos

Leitura e escrita com localStorage

Separação de responsabilidades em arquivos JS distintos

Fluxo de dados entre páginas HTML

📜 Licença

Distribuído sob a MIT License.
Veja o arquivo LICENSE
 para mais detalhes.

📬 Contato

André Alexandre Moreira Dantas
💻 GitHub

🌐 Portfólio

📧 Em breve — contato profissional