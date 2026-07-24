/**
 * DAVI VICTOR - LÓGICA DO PORTFÓLIO WEB E CONEXÃO GITHUB API
 */

let allProjectsData = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initThemeAndScrollEvents();
    initGitHubForm();
    initContactForm();
    initModalEvents();

    // Username inicial
    const initialUser = window.PORTFOLIO_CONFIG?.githubUsername || 'davizinhoofiap';
    
    const usernameInput = document.getElementById('github-username-input');
    if (usernameInput) usernameInput.value = initialUser;

    loadGitHubData(initialUser);
});

/**
 * 1. Inicializa Configurações e Textos da Página
 */
function initApp() {
    const config = window.PORTFOLIO_CONFIG;
    if (!config) return;

    // Nome e Título
    if (config.name) {
        document.getElementById('hero-github-user').textContent = `@${config.githubUsername}`;
    }

    if (config.aboutMe?.summary) {
        document.getElementById('about-summary-text').textContent = config.aboutMe.summary;
    }

    if (config.location) {
        document.getElementById('info-location').textContent = config.location;
    }

    // Destaques do Perfil
    const highlightsList = document.getElementById('about-highlights-list');
    if (highlightsList && config.aboutMe?.highlights) {
        highlightsList.innerHTML = config.aboutMe.highlights.map(item => `<li>${item}</li>`).join('');
    }

    // Skills
    renderSkills('skills-frontend', config.skills?.frontend || []);
    renderSkills('skills-backend', config.skills?.backend || []);
    renderSkills('skills-database', config.skills?.database || []);
    renderSkills('skills-tools', config.skills?.tools || []);

    // Links de Contato
    if (config.socialLinks?.linkedin) {
        document.getElementById('contact-linkedin').href = config.socialLinks.linkedin;
    }
    if (config.socialLinks?.whatsapp) {
        document.getElementById('contact-whatsapp').href = config.socialLinks.whatsapp;
    }

    // Ano no Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function renderSkills(containerId, skillsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = skillsArray.map(skill => `<span class="skill-pill">${skill}</span>`).join('');
}

/**
 * 2. Integração com a API do GitHub
 */
async function loadGitHubData(username) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = `
        <div class="loading-box">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
            <p>Conectando ao GitHub de @${username}...</p>
        </div>
    `;

    try {
        // Dados do Usuário
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Usuário não encontrado');
        const userData = await userRes.json();

        document.getElementById('hero-github-user').textContent = `@${userData.login}`;

        // Repositórios
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`);
        if (!reposRes.ok) throw new Error('Erro ao carregar repositórios');
        const reposData = await reposRes.json();

        allProjectsData = reposData;

        // Atualiza Estatísticas
        document.getElementById('stat-repos-count').textContent = userData.public_repos || reposData.length;
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        document.getElementById('stat-stars-count').textContent = totalStars;
        document.getElementById('stat-followers-count').textContent = userData.followers || 0;

        // Renderiza Filtros e Cards
        renderLanguageFilters(reposData);
        renderProjects(reposData);
        initSearchAndFilterEvents();

    } catch (error) {
        console.error(error);
        projectsGrid.innerHTML = `
            <div class="loading-box">
                <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>
                <p>Erro ao carregar repositórios de @${username}. Verifique o nome de usuário.</p>
            </div>
        `;
    }
}

/**
 * 3. Renderização dos Cards de Projetos
 */
function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');

    if (!projects || projects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="loading-box">
                <i class="fa-solid fa-folder-open"></i>
                <p>Nenhum repositório encontrado.</p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = projects.map(repo => {
        const lang = repo.language || 'Geral';
        const langColor = getLanguageColor(lang);

        return `
            <div class="project-card" data-id="${repo.id}">
                <div class="project-card-header">
                    <i class="fa-regular fa-folder project-folder-icon"></i>
                    <div class="project-external-links">
                        <a href="${repo.html_url}" target="_blank" title="Ver código no GitHub"><i class="fa-brands fa-github"></i></a>
                        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" title="Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                    </div>
                </div>

                <h3 class="project-title">${repo.name}</h3>
                <p class="project-desc">${repo.description || 'Repositório mantido no GitHub.'}</p>

                <div class="project-card-footer">
                    <div class="lang-dot-wrapper">
                        <span class="lang-dot" style="background-color: ${langColor}"></span>
                        <span>${lang}</span>
                    </div>
                    <div class="repo-stats">
                        <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Clique no Card abre o Modal
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            const repoId = card.getAttribute('data-id');
            const repoData = allProjectsData.find(r => r.id == repoId);
            if (repoData) openProjectModal(repoData);
        });
    });
}

/**
 * 4. Filtros e Busca
 */
function renderLanguageFilters(repos) {
    const filterButtonsContainer = document.getElementById('filter-buttons');
    const languages = ['all', ...new Set(repos.map(r => r.language).filter(Boolean))];

    filterButtonsContainer.innerHTML = languages.map(lang => `
        <button class="pill-btn ${lang === 'all' ? 'active' : ''}" data-filter="${lang}">
            ${lang === 'all' ? 'Todos' : lang}
        </button>
    `).join('');
}

function initSearchAndFilterEvents() {
    const searchInput = document.getElementById('project-search');
    const filterContainer = document.getElementById('filter-buttons');

    function applyFilters() {
        const query = searchInput.value.toLowerCase().trim();

        const filtered = allProjectsData.filter(repo => {
            const matchesSearch = repo.name.toLowerCase().includes(query) || 
                                  (repo.description && repo.description.toLowerCase().includes(query)) ||
                                  (repo.language && repo.language.toLowerCase().includes(query));
            
            const matchesFilter = currentFilter === 'all' || repo.language === currentFilter;

            return matchesSearch && matchesFilter;
        });

        renderProjects(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);

    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('pill-btn')) {
                document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                currentFilter = e.target.getAttribute('data-filter');
                applyFilters();
            }
        });
    }
}

/**
 * 5. Modal de Detalhes
 */
function openProjectModal(repo) {
    const modal = document.getElementById('project-modal');
    document.getElementById('modal-title').textContent = repo.name;
    document.getElementById('modal-language').textContent = repo.language || 'Geral';
    document.getElementById('modal-description').textContent = repo.description || 'Repositório público no GitHub.';
    document.getElementById('modal-stars').textContent = repo.stargazers_count;
    document.getElementById('modal-forks').textContent = repo.forks_count;
    
    const updatedDate = new Date(repo.updated_at).toLocaleDateString('pt-BR');
    document.getElementById('modal-updated').textContent = updatedDate;
    document.getElementById('modal-repo-link').href = repo.html_url;

    const demoLink = document.getElementById('modal-demo-link');
    if (repo.homepage) {
        demoLink.href = repo.homepage;
        demoLink.style.display = 'inline-flex';
    } else {
        demoLink.style.display = 'none';
    }

    const topicsContainer = document.getElementById('modal-topics');
    if (repo.topics && repo.topics.length > 0) {
        topicsContainer.innerHTML = repo.topics.map(t => `<span class="skill-pill">#${t}</span>`).join('');
    } else {
        topicsContainer.innerHTML = '';
    }

    modal.classList.add('active');
}

function initModalEvents() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');

    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

/**
 * 6. Troca de Usuário do GitHub
 */
function initGitHubForm() {
    const form = document.getElementById('github-user-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = document.getElementById('github-username-input');
        const submitBtn = form.querySelector('.sync-btn');
        const username = input.value.trim();

        if (username) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> CARREGANDO...';
            submitBtn.disabled = true;

            await loadGitHubData(username);

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Rola suavemente até a seção de projetos para o usuário ver os resultados
            const projectsSec = document.getElementById('projects');
            if (projectsSec) {
                projectsSec.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

/**
 * 7. Indicador Lateral (00, 01, 02, 03, 04) ao Rolar a Página
 */
function initThemeAndScrollEvents() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-idx-item');

    window.addEventListener('scroll', () => {
        let currentSecId = '';

        sections.forEach(sec => {
            const secTop = sec.offsetTop - 200;
            const secHeight = sec.offsetHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSecId = sec.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSecId}`) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * 8. Envio de Formulário
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        feedback.textContent = '✓ Mensagem enviada com sucesso! Obrigado pelo contato.';
        form.reset();
        setTimeout(() => feedback.textContent = '', 4000);
    });
}

function getLanguageColor(lang) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Python': '#3572A5',
        'Java': '#b07219',
        'C#': '#178600',
        'PHP': '#4F5D95',
        'Go': '#00ADD8'
    };
    return colors[lang] || '#A855F7';
}
