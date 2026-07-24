# 🚀 Portfólio Web para Desenvolvedor Jr / Estagiário

Um portfólio moderno, responsivo e de alto impacto visual, integrado diretamente com a **API pública do GitHub**. Criado especialmente para destacar suas habilidades, projetos e trajetória para recrutadores e lideranças técnicas.

---

## ✨ Principais Recurso

- ⚡ **Integração em Tempo Real com o GitHub**: Carrega automaticamente sua foto de perfil, bio, número de repositórios, estrelas, seguidores e todos os seus projetos públicos.
- 🎨 **Design System Moderno**: Efeitos em Glassmorphism, Dark Mode com gradientes neon, tipografia limpa (Inter + JetBrains Mono) e micro-interações.
- 🔍 **Filtro e Busca Dinâmica de Projetos**: Permite filtrar repositórios por linguagem (JavaScript, Python, React, Java, HTML, etc.) ou buscar por nome/tecnologia.
- 💡 **Modal de Detalhes do Projeto**: Exibe informações detalhadas do repositório, estrelas, forks, tags e links diretos para o código ou demo ao vivo.
- 📱 **100% Responsivo**: Adaptado perfeitamente para celulares, tablets e desktops.
- ⚙️ **Configuração Simplificada**: Altere seus dados em um único arquivo (`config.js`).

---

## 🛠️ Como Personalizar Seu Portfólio

Para colocar suas informações pessoais no portfólio, basta abrir o arquivo [`config.js`](file:///C:/Users/davizinho/.gemini/antigravity/scratch/portfolio-dev/config.js) e alterar os campos:

```javascript
const PORTFOLIO_CONFIG = {
    // 1. Digite seu nome de usuário exato do GitHub
    githubUsername: 'SEU_USERNAME_AQUI', 

    // 2. Seus dados pessoais e cargo desejado
    name: 'Seu Nome Completo',
    title: 'Desenvolvedor Jr / Estagiário de Software',
    bio: 'Sua frase de apresentação marcante...',
    
    // 3. Seus links de contato e redes sociais
    socialLinks: {
        github: 'https://github.com/seu-user',
        linkedin: 'https://linkedin.com/in/seu-perfil',
        email: 'seuemail@exemplo.com',
        whatsapp: 'https://wa.me/55XXXXXXXXXXX',
        resumePdf: 'LINK_DO_SEU_CURRICULO_EM_PDF'
    },

    // 4. Suas tecnologias e conhecimentos
    skills: {
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'],
        backend: ['Node.js', 'Express', 'Python', 'APIs REST'],
        database: ['PostgreSQL', 'MySQL', 'MongoDB'],
        tools: ['Git', 'GitHub', 'VS Code', 'Docker Basics', 'Scrum']
    }
};
```

---

## 🌐 Como Publicar Gratuitamente no GitHub Pages (5 Passos)

1. **Crie um repositório no seu GitHub**:
   - Acesse [github.com/new](https://github.com/new)
   - Nomeie o repositório como `portfolio` ou `meu-portfolio`.
   - Deixe-o como **Público**.

2. **Suba os arquivos do seu projeto**:
   - No seu terminal, dentro da pasta do projeto, execute:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio commit"
     git branch -M main
     git remote add origin https://github.com/SEU_USERNAME/meu-portfolio.git
     git push -u origin main
     ```

3. **Ative o GitHub Pages**:
   - Abra seu repositório no GitHub na web.
   - Vá em **Settings** > **Pages** (no menu lateral esquerdo).
   - Em **Build and deployment** > **Branch**, selecione `main` e a pasta `/ (root)`.
   - Clique em **Save**.

4. **Pronto! 🎉**
   - Em cerca de 1 a 2 minutos, seu portfólio estará online no link:
   - `https://SEU_USERNAME.github.io/meu-portfolio/`

---

## 💡 Dicas para Vagas de Desenvolvedor Jr / Estagiário

- 📌 **Mantenha seus repositórios organizados**: Adicione um bom arquivo `README.md` em cada projeto no seu GitHub explicando o problema resolvido, como rodar o projeto e imagens da tela.
- 🌟 **Fixe seus melhores projetos**: No seu perfil do GitHub, use a opção "Pin" para destacar de 4 a 6 projetos dos quais você mais se orgulha.
- ✉️ **Coloque o link deste Portfólio no seu LinkedIn e no Currículo PDF**!
