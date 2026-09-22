
👥 Equipe de Desenvolvimento
Verônica
Andersson

🛠️ Tecnologias Utilizadas
TypeScript: Linguagem base para tipagem estática e desenvolvimento seguro.

Node.js: Ambiente de execução JavaScript do lado do servidor.

tsx: Executor TypeScript de alta performance para Node.js (sem necessidade de compilação prévia manual).

APIs REST Consumidas:

JSONPlaceholder: API fake para simulação completa de operações CRUD.

ViaCEP: Web service gratuito para consulta de endereços no Brasil via CEP.

📌 Funcionalidades Demonstradas
⏳ Manipulação de Assincronismo e Promises:

Exemplos práticos do ciclo de vida de Promises com async/await e fluxos assíncronos temporizados.

📍 Consulta Externa (GET - ViaCEP):

Busca de dados de endereço em tempo real a partir de um CEP informado.

🔄 Operações CRUD de Posts (JSONPlaceholder):

📖 Read (GET): Consulta os dados de um post específico (/posts/1) e exibe o título no console.

➕ Create (POST): Envia uma requisição de criação de novo post e exibe o registro retornado.

✏️ Update (PATCH): Atualiza parcialmente o título de um post existente e confirma a alteração.

🗑️ Delete (DELETE): Envia a requisição de remoção do post e confirma a execução com sucesso.

📂 Estrutura do Projeto
Plaintext
.
├── src/
│   ├── index.ts          # Ponto de entrada do projeto
│   ├── services/         # Funções de requisição e consumo de APIs
│   └── types/            # Definições de interfaces e tipos do TypeScript
├── package.json
├── tsconfig.json
└── README.md
⚙️ Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (versão 18 ou superior recomendada)

Gerenciador de pacotes npm ou yarn

🚀 Como Executar o Projeto
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
Acesse a pasta do projeto:

Bash
cd seu-repositorio
Instale as dependências:

Bash
npm install
Execute o código:

Bash
npm start
# Ou se utilizar o tsx diretamente:
npx tsx src/index.ts
📄 Licença
Este projeto foi desenvolvido para fins educacionais e de demonstração prática.

Key Highlights das melhorias feitas:
Padronização de Idioma: Ajustado para Português (Brasil) uniforme (ex: utilizador/consola foram padronizados para usuário/console).

Estrutura de Instruções: Adicionados os passos práticos de instalação e execução (git clone, npm install, npm start), fundamentais para quem clonar o repositório.

Links Diretos: Adicionados links relevantes para as tecnologias e APIs utilizadas.

Organização Visual: Uso de citações (>), separadores horizontais (---) e bloco de código para estrutura de pastas, deixando a leitura rápida e agradável.