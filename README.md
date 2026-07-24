# Portfólio de Desenvolvedor - Davi Victor

LINK PARA VISUALIZACAO AO VIVO DO PORTFOLIO:
https://davizinhoofiap.github.io/portfolio/

Aplicaçao web interativa e responsiva criada para apresentar projetos, habilidades técnicas e trajetoria academica de Davi Victor (Estudante de Tecnologia na FIAP), com integraçao em tempo real a API pública do GitHub.

---

## Visao Geral do Projeto

Este projeto foi projetado com arquitetura modular e foco em boas práticas de desenvolvimento web. A aplicaçao consome dinamicamente dados do perfil e repositórios do GitHub, oferecendo aos recrutadores e lideranças técnicas uma visao clara da produçao de código, estatísticas de repositórios e linguagens utilizadas.

---

## Tecnologias e Arquitetura

- Frontend: HTML5 semântico, CSS3 customizado (Arquitetura de temas escuros, Glassmorphism, layout responsivo) e JavaScript Modular (ES6+).
- Integraçao com API REST: Consumo da API pública do GitHub (`/users/{username}` e `/users/{username}/repos`).
- UI/UX: Design com foco em usabilidade, navegaçao por índice numérico, tipografia técnica (Plus Jakarta Sans e JetBrains Mono) e animaçoes leves.
- Filtros Dinâmicos: Filtragem de repositórios por linguagem principal e busca por palavras-chave em tempo real.

---

## Principais Funcionalidades

1. Sincronizaçao Dinâmica com GitHub: Carregamento automático de estatísticas (repositórios públicos, estrelas totais, seguidores e foto de perfil).
2. Filtro e Busca de Projetos: Sistema de busca instantânea e categorizaçao por linguagem (JavaScript, TypeScript, Python, HTML/CSS, etc.).
3. Modal de Detalhes do Repositório: Exibiçao de métricas, tópicos/tags do repositório, data de atualizaçao e links diretos para o código fonte e demonstraçao ao vivo.
4. Formulário de Contato e Conexao Direta: Integraçao com botões para contato via LinkedIn e WhatsApp com privacidade de exibição.

---

## Estrutura de Arquivos

```
portfolio-dev/
├── index.html        # Estrutura semântica principal da aplicaçao
├── style.css         # Design system, variáveis de tema e responsividade
├── app.js            # Lógica em JavaScript ES6+ e consumo da API do GitHub
├── config.js         # Configuraçoes globais do perfil e redes sociais
└── README.md         # Documentaçao técnica do projeto
```

---

## Como Executar o Projeto Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/davizinhoofiap/portfolio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd portfolio
   ```
3. Abra o arquivo `index.html` em qualquer navegador web ou utilize uma extensao de servidor local (ex: Live Server no VS Code).

---

## Contato e Redes Profissionais

- Desenvolvedor: Davi Victor
- Instituiçao: FIAP (Faculdade de Informática e Administraçao Paulista)
- LinkedIn: https://www.linkedin.com/in/davimvictor/
- GitHub: https://github.com/davizinhoofiap
