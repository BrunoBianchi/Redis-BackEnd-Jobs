# Backend Jobs - Node.js & Redis

## Visão Geral

Este repositório contém o código-fonte do projeto **Backend Jobs**, uma aplicação em **Node.js** que utiliza **Redis** para gerenciar tarefas assíncronas. O objetivo principal deste projeto é processar requisições para a rota `/users`, onde um novo usuário é criado e um email de boas-vindas é enviado de forma assíncrona.

## Tecnologias Principais

### Node.js

Node.js é um ambiente de execução JavaScript assíncrono construído sobre o motor V8 da Google. É ideal para construir aplicações escaláveis e eficientes em termos de desempenho.

### Redis

Redis é empregado como banco de dados chave-valor em memória. Neste projeto, é utilizado para gerenciar uma fila de tarefas assíncronas, garantindo eficiência e escalabilidade.

## Funcionalidades Principais

1. **Agendamento de Tarefas:** As requisições POST para a rota `/users` são adicionadas à fila de tarefas, permitindo o agendamento e processamento eficiente de criação de usuários e envio de emails.

2. **Criação de Usuário Assíncrona:** O processamento da criação de um novo usuário ocorre de forma assíncrona, garantindo uma resposta rápida para o cliente e possibilitando a execução de outras tarefas enquanto a criação do usuário é realizada em segundo plano.

3. **Envio de Email de Boas-Vindas:** Após a criação do usuário, um email de boas-vindas é enviado assincronamente, garantindo que o processo de criação do usuário não seja impactado pelo envio de emails.

## Estrutura do Projeto

- **`src/`**: Contém o código-fonte da aplicação.
  - **`controllers/`**: Responsável por gerenciar as requisições HTTP.
  - **`lib/`**: Bibliotecas criadas para o manuseio de emails.
  - **`jobs/`**: Tarefas cridas para processo de agendamento.

## Como Executar

1. **Instalação das Dependências:**
   ```bash
   npm install
   ```

2. **OBS**
    Para essa abordagem estou usando docker!
    Mais especificamente um container do redis, para que a instalação seja mais fácil
    
   ```bash
    docker run --name redis -p 6379:6379 -d -t redis:alpine
   ```
 
3. **Iniciando o projeto:**
   ```bash
     npm run start // Rodar o servidor utilizando express.js
     npm run queue // Rodar o servidor de queue, o qual irá conectar ao redis
   ```




