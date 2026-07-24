/**
 * Configuração Principal do Portfólio
 * Altere os valores abaixo com os seus dados pessoais e de contato.
 */
const PORTFOLIO_CONFIG = {
    // Digite aqui o seu username exatamente como está no GitHub
    githubUsername: 'davizinhoofiap', 

    // Repositórios ocultos do portfólio
    excludedRepos: ['projetofintech-fiap'],

    // Dados Pessoais e Profissionais
    name: 'Davi Victor',
    title: 'Desenvolvedor Jr / Estagiário de TI',
    bio: 'Estudante de Tecnologia na FIAP & Desenvolvedor em formação. Apaixonado por desenvolvimento de software, aplicações web modernas e resolução de problemas.',
    location: 'São Paulo, Brasil',

    // Status Profissional
    availability: 'Disponível para contratação (Presencial / Híbrido / Remoto)',
    
    // Roles para o efeito de digitação no cabeçalho
    typewriterRoles: [
        'Desenvolvedor Junior',
        'Estagiário de TI',
        'Estudante FIAP',
        'Desenvolvedor Fullstack',
        'Entusiasta de Código Limpo'
    ],

    // Links de Contato e Redes Sociais
    socialLinks: {
        github: 'https://github.com/davizinhoofiap',
        linkedin: 'https://www.linkedin.com/in/davimvictor/',
        email: 'seu.email@exemplo.com',
        whatsapp: 'https://wa.me/5511982441326',
        resumePdf: '#' // Cole o link do seu currículo em PDF (ex: Google Drive, Dropbox, ou pasta local)
    },

    // Habilidades Principais para a Matriz de Tecnologias
    skills: {
        frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Design Responsivo'],
        backend: ['Node.js', 'Express', 'Python', 'Java', 'APIs REST'],
        database: ['PostgreSQL', 'MySQL', 'MongoDB'],
        tools: ['Git', 'GitHub', 'VS Code', 'Docker Basics', 'Figma', 'Scrum / Agile']
    },

    // Trajetória / Sobre Mim
    aboutMe: {
        summary: `Sou um desenvolvedor em início de carreira, motivado por desafios lógicos e pela constante evolução tecnológica. 
        Dedico minhas horas de estudo à criação de aplicações funcionais, bem estruturadas e com foco na experiência do usuário e boas práticas de código.`,
        highlights: [
            'Foco em aprendizado contínuo e autonomia',
            'Facilidade no trabalho em equipe e comunicação transparente',
            'Boas práticas de Git e Versionamento de Código',
            'Interesse por Arquitetura de Software e Código Limpo'
        ]
    }
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
