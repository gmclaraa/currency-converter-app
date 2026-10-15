

Readme · MD
# 💱 Conversor de Moedas
 
Aplicativo mobile desenvolvido para praticar React Native com Expo, consumindo uma API de câmbio em tempo real. Permite escolher a moeda de origem e a de destino, informar um valor e ver o resultado convertido junto com a taxa de câmbio atual.
 
## 🛠️ Tecnologias utilizadas
 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
 
## 📚 Conceitos praticados
 
- Consumo de API REST com `fetch` e `async/await`
- Gerenciamento de estados com React (`useState`)
- Componentização (Button, Input, ResultCard)
- Estilização com `StyleSheet` e tema escuro
- Tratamento de erros e estado de carregamento (`try/catch/finally`, `ActivityIndicator`)
- Organização de projeto em pastas (components, services, utils, constants, styles)
- Versionamento com Git e GitHub
## 💻 Sobre o projeto
 
A proposta foi criar um conversor de moedas simples e direto, com interface limpa e tema escuro. O usuário seleciona a moeda de origem ("De") e a de destino ("Para"), digita o valor e toca em "Converter". O app busca a cotação atual na API e mostra o valor convertido com a taxa utilizada.
 
## 🔍 Funcionalidades
 
- Seleção da moeda de origem e de destino, com destaque visual no botão escolhido
- Botão para inverter as moedas (↑↓)
- Conversão com cotação atualizada via API
- Indicador de carregamento durante a requisição
- Botão desativado enquanto não houver valor digitado
- Exibição do resultado e da taxa de câmbio
## 📁 Estrutura
 
```text
src/
├── components/   # Button, Input, ResultCard
├── constants/    # lista de moedas
├── services/     # chamada à API de câmbio
├── styles/       # estilos globais e cores
└── utils/        # função de conversão
```
 
## 🚀 Como executar
 
### Pré-requisitos
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- App [Expo Go](https://expo.dev/go) instalado no celular
### 1. Clone o projeto
 
```bash
git clone https://github.com/gmclaraa/currency-converter-app.git
cd currency-converter-app
```
 
### 2. Instale as dependências
 
```bash
npm install
```
 
### 3. Inicie o projeto
 
```bash
npx expo start
```
 
Se o celular não conectar, use:
 
```bash
npx expo start --tunnel
```
 
### 4. Abra no celular
 
Escaneie o QR code exibido no terminal com o Expo Go.
 
💡 Celular e computador precisam estar na mesma rede Wi-Fi.
 
