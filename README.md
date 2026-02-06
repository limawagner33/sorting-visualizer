# 📊 Visualizador de Algoritmos de Ordenação

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Uma aplicação web interativa desenvolvida para visualizar algoritmos clássicos de ordenação em ação. Este projeto demonstra conhecimentos em **Estrutura de Dados e Algoritmos**, **React Hooks** e **JavaScript Assíncrono**.

## 🚀 Live Demo (Teste Online)

👉 **[Clique aqui para testar a aplicação no ar](https://sorting-visualizer-limawagner33.vercel.app/)**

---

## 🛠 Funcionalidades

- **Múltiplos Algoritmos:** Visualização do **Bubble Sort** (O(n²)) e **Quick Sort** (O(n log n)).
- **Controle Total:** Ajuste de velocidade da animação e tamanho do array em tempo real.
- **Feedback Visual:** Sistema de cores para facilitar o entendimento:
  - 🟦 **Turquesa:** Estado padrão.
  - 🟥 **Vermelho:** Comparando elementos.
  - 🟪 **Roxo:** Trocando elementos de lugar (Swap).
  - 🟩 **Verde:** Elementos já ordenados.
- **Design Responsivo:** Interface limpa construída com CSS moderno.

---

## 🧠 Conceitos Técnicos Aplicados

### 1. Controle de Animação Assíncrona
Manipular animações em algoritmos de ordenação geralmente requer lógica complexa. Neste projeto, implementei uma função ```sleep``` customizada combinada com ```async/await``` dentro dos loops de ordenação. Isso permite que a interface (UI) seja atualizada visualmente a cada passo sem travar a thread principal do JavaScript.

```javascript
// Função de delay para controlar a velocidade da animação
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));```
```
### 2. Gerenciamento de Estado e Imutabilidade
Uso de useState para atualizar o array visualmente e useRef para controlar o fluxo de execução (impedindo que o usuário quebre a aplicação clicando em botões enquanto a ordenação acontece).

### 3. Implementação dos Algoritmos
Bubble Sort: Implementado com loops aninhados, visualizando o efeito de "bolha" onde os maiores elementos flutuam para o final.

Quick Sort: Implementado de forma recursiva utilizando a lógica de particionamento, demonstrando domínio de estratégias de "Dividir para Conquistar".

---

💻 Como Rodar Localmente
1. Clone o repositório
```javascript
Bash
```
```javascript
git clone [https://github.com/limawagner33/sorting-visualizer.git](https://github.com/limawagner33/sorting-visualizer.git)
```
2. Instale as dependências
```javascript
Bash
```
```javascript
cd sorting-visualizer
```
```javascript
npm install
```
3. Inicie o servidor de desenvolvimento
```javascript
Bash
```
```javascript
npm run dev
```

---
📬. Contato
.Projeto desenvolvido por Wagner Lima. Conecte-se comigo no **[Linkedin](https://www.linkedin.com/in/wagner-matos-de-lima/)**.