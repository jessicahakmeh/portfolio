// portfolio.js

// Initialize the portfolio with data from content.js
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after content is loaded
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1000);

    // Initialize all sections with data
    initializeNavigation();
    initializeHome();
    initializeAbout();
    initializeExperience();
    initializeProjects();
    initializeProjectModal();
    initializeSkills();
    initializeAchievements();
    initializeContact();
    initializeFooter();

    // Initialize animations and interactions
    initializeAnimations();
    initializeCustomCursor();
    initializeBackToTop();
    initializeMobileMenu();
    initializeScrollSpy();
    initializeTypingAnimation();
});

// Dynamic Calculations
function calculateYearsExperience() {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
}

function calculateProjectCount() {
    return window.data.sections.projects.featured_projects.length;
}

function calculateDegreeCount() {
    return window.data.sections.experience.education.length;
}

function calculateCurrentYear() {
    return new Date().getFullYear();
}

// Navigation Initialization


function initializeNavigation() {
    const navMenu = document.getElementById('navMenu');
    const menuItems = window.data.site_configuration.navigation.menu_items;
    
    // Create navigation links
    navMenu.innerHTML = menuItems.map(item => 
        `<a href="#${item.id}" class="nav-link" data-target="${item.id}">${item.label}</a>`
    ).join('');

    // smooth page transition when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.dataset.target;
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                document.body.classList.add('transitioning');
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // remove class after animation finishes
                    setTimeout(() => document.body.classList.remove('transitioning'), 300);
                }, 300);
            }
        });
    });
} 

// Home Section Initialization
function initializeHome() {
    const hero = window.data.sections.home.hero;
    
    document.getElementById('heroGreeting').textContent = hero.greeting;
    document.getElementById('heroName').textContent = hero.name;
    document.getElementById('heroDescription').textContent = hero.short_bio;

    // Create hero titles for typing animation
    window.heroTitles = hero.titles;

    // Create CTA buttons
    const heroButtons = document.getElementById('heroButtons');
    heroButtons.innerHTML = hero.cta_buttons.map(btn => 
        `<a href="${btn.link}" class="btn ${btn.primary ? 'btn-primary' : 'btn-secondary'}">
            <span>${btn.text}</span>
            <i class="fas fa-${btn.primary ? 'arrow-right' : 'paper-plane'}"></i>
        </a>`
    ).join('');

    // Create dynamic stats
    const heroStats = document.getElementById('heroStats');
    const currentYear = calculateCurrentYear();
    const yearsExp = calculateYearsExperience();
    
    heroStats.innerHTML = `
        <div class="stat-item">
            <span class="stat-number">${calculateProjectCount()}+</span>
            <span class="stat-label">Projects</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${yearsExp}+</span>
            <span class="stat-label">Years Exp</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">2025</span>
            <span class="stat-label">Employee of Year</span>
        </div>
    `;
}

// About Section Initialization
function initializeAbout() {
    const about = window.data.sections.about;
    
    document.getElementById('aboutSubtitle').textContent = about.subtitle;
    document.getElementById('aboutTitle').textContent = about.title;

    // Handle profile image
    const imagePlaceholder = document.querySelector('.image-placeholder');
    if (about.content.image && imagePlaceholder) {
        imagePlaceholder.innerHTML = `<img src="${about.content.image}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">`;
    }

    // Create about text
    const aboutText = document.getElementById('aboutText');
    const paragraphs = about.content.bio_paragraphs.map(p => `<p class="about-paragraph">${p}</p>`).join('');
    
    const personalInfo = `
        <div class="personal-info">
            <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">${about.content.personal_details.name}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Nationality:</span>
                <span class="info-value">${about.content.personal_details.nationality}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Languages:</span>
                <span class="info-value">${about.content.personal_details.languages.join(', ')}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Education:</span>
                <span class="info-value">${about.content.personal_details.education[0]}</span>
            </div>
        </div>
    `;

    const funFacts = `
        <div class="fun-facts">
            ${about.content.personal_details.fun_facts.map(fact => 
                `<div class="fun-fact">
                    <i class="fas fa-${fact.includes('streaming') ? 'video' : fact.includes('Employee') ? 'trophy' : 'graduation-cap'}"></i>
                    <span>${fact}</span>
                </div>`
            ).join('')}
        </div>
    `;

    aboutText.innerHTML = paragraphs + personalInfo + funFacts;

    // Create experience badge with dynamic calculation
    const yearsExp = calculateYearsExperience();
    document.getElementById('experienceBadge').innerHTML = `
        <span class="years">${yearsExp}+</span>
        <span class="text">Years of<br>Experience</span>
    `;
}

// Experience Section Initialization
function initializeExperience() {
    const experience = window.data.sections.experience;
    
    document.getElementById('experienceSubtitle').textContent = experience.subtitle;
    document.getElementById('experienceTitle').textContent = experience.title;

    const timeline = document.getElementById('timeline');
    
    // Create timeline from employment and education
    const timelineItems = [
        ...experience.employment.map(job => ({
            type: 'work',
            date: `${job.start_date} - ${job.end_date}`,
            title: job.position,
            company: job.company,
            description: job.description,
            technologies: job.technologies,
            icon: 'briefcase'
        })),
        ...experience.education.map(edu => ({
            type: 'education',
            date: edu.date,
            title: edu.degree,
            company: edu.institution,
            description: edu.description,
            icon: 'graduation-cap'
        }))
    ];

    timeline.innerHTML = timelineItems.map((item, index) => `
        <div class="timeline-item fade-in" data-position="${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-icon">
                    <i class="fas fa-${item.icon}"></i>
                </div>
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-company">${item.company}</div>
                <p class="timeline-description">${item.description}</p>
                ${item.technologies ? `
                    <div class="timeline-tags">
                        ${item.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Projects Section Initialization
function initializeProjects() {
    const projects = window.data.sections.projects;
    
    document.getElementById('projectsSubtitle').textContent = projects.subtitle;
    document.getElementById('projectsTitle').textContent = projects.title;

    const projectsGrid = document.getElementById('projectsGrid');
    const projectsContainer = projectsGrid.parentElement;
    
    // Separate featured and non-featured projects
    const allProjects = projects.featured_projects;
    const featuredProjects = allProjects.filter(p => p.featured === true);
    const otherProjects = allProjects.filter(p => p.featured === false);
    
    // Track which view is active
    let state = {
        isShowingOthers: false
    };
    
    // Render projects based on current state
    const renderProjects = () => {
        const projectsToShow = state.isShowingOthers ? otherProjects : featuredProjects;
        
        projectsGrid.innerHTML = projectsToShow.map(project => `
            <div class="project-card fade-in" data-id="${project.id}">
                <div class="project-card-inner">
                    <div class="project-card-front">
                        <div class="folder-icon">
                            <i class="fas fa-folder-open"></i>
                            <i class="fas fa-${getProjectIcon(project)} folder-overlay"></i>
                        </div>
                        <h3 class="project-title">${project.name}</h3>
                        <div class="project-meta">${project.year || ''} - ${project.category || ''}</div>
                        <p class="project-description">${project.short_description}</p>
                        <div class="project-tech">
                            ${project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="project-company">
                            <i class="fas fa-building"></i> ${project.company || ''}
                        </div>
                    </div>
                    <div class="project-card-back">
                        <h4 class="back-title">Key Contributions</h4>
                        <ul class="back-list">
                            ${project.contribution.slice(0, 4).map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        <button class="project-more" data-id="${project.id}">Check more</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Reinitialize animations for new cards
        const newCards = projectsGrid.querySelectorAll('.project-card');
        newCards.forEach(card => card.classList.add('animate'));
    };
    
    // Create or get toggle button
    let toggleBtn = projectsContainer.querySelector('.projects-toggle-btn');
    if (!toggleBtn && otherProjects.length > 0) {
        toggleBtn = document.createElement('button');
        toggleBtn.className = 'projects-toggle-btn';
        projectsContainer.insertBefore(toggleBtn, projectsGrid);
    }
    
    // Set initial text and visibility
    if (toggleBtn) {
        toggleBtn.textContent = 'Show Other Projects';
        toggleBtn.style.display = otherProjects.length > 0 ? 'block' : 'none';
        
        // Attach click handler
        toggleBtn.addEventListener('click', () => {
            state.isShowingOthers = !state.isShowingOthers;
            toggleBtn.textContent = state.isShowingOthers ? 'Show Featured Projects' : 'Show Other Projects';
            toggleBtn.classList.toggle('active');
            renderProjects();
        });
    }
    
    // Initial render - featured projects only
    renderProjects();
} 

function getProjectIcon(project) {
    if (project.name.includes('Newborn')) return 'video';
    if (project.name.includes('Queue')) return 'users';
    if (project.name.includes('Token')) return 'key';
    return 'code';
}



// Projects Modal Initialization
function initializeProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.modal-close');

    // delegate clicks
    document.body.addEventListener('click', function(e) {
        const projectCard = e.target.closest('.project-card');
        if (projectCard && projectCard.dataset.id) {
            const id = projectCard.dataset.id;
            const project = window.data.sections.projects.featured_projects.find(p => p.id === id);
            if (project) {
                showProjectModal(project);
            }
        }
        
        if (e.target.classList.contains('project-more')) {
            const id = e.target.dataset.id;
            const project = window.data.sections.projects.featured_projects.find(p => p.id === id);
            if (project) {
                showProjectModal(project);
            }
        }

        // close interactions
        if (e.target === modal || e.target === closeBtn) {
            modal.classList.add('hidden');
        }
    });
}

// animate the sequential appearance of workflow nodes
function animateWorkflow(container) {
    const nodes = Array.from(container.children);
    nodes.forEach((node, idx) => {
        setTimeout(() => {
            node.classList.add('show');
        }, idx * 200);
    });
}

// Initialize expandable sections
function initializeExpandableSections() {
    document.querySelectorAll('.section-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            content.classList.toggle('active');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });
}

// Initialize swipe cards for challenges
function initializeSwipeCards() {
    document.querySelectorAll('.swipe-container').forEach(container => {
        const wrapper = container.querySelector('.swipe-wrapper');
        const dots = container.querySelectorAll('.swipe-dot');
        let currentSlide = 0;
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        // Touch events for mobile
        wrapper.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
        }, false);

        wrapper.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            const diff = (currentX - startX) / wrapper.offsetWidth * 100;
            wrapper.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}%))`;
        }, false);

        wrapper.addEventListener('touchend', () => {
            isDragging = false;
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0 && currentSlide < 1) currentSlide++;
                if (diff < 0 && currentSlide > 0) currentSlide--;
            }
            updateSlide();
        }, false);

        // Mouse drag for desktop
        wrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || wrapper !== container.querySelector('.swipe-wrapper')) return;
            currentX = e.clientX;
            const diff = (currentX - startX) / wrapper.offsetWidth * 100;
            wrapper.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}%))`;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0 && currentSlide < 1) currentSlide++;
                if (diff < 0 && currentSlide > 0) currentSlide--;
            }
            updateSlide();
        });

        // Dot click navigation
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentSlide = parseInt(dot.dataset.slide);
                updateSlide();
            });
        });

        function updateSlide() {
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSlide);
            });
        }
    });
}

// helper used by project modal handlers so logic isn't duplicated
function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const modalBody = document.getElementById('modalBody');

    // Set header
    modalTitle.textContent = project.name;
    modalMeta.textContent = `${project.category || ''} - ${project.year || ''} ${project.role ? ' - ' + project.role : ''}`;

    // Helper to create expandable section
    const createSection = (title, content, isOpen = false) => {
        return `
            <div class="expandable-section ${isOpen ? 'open' : ''}">
                <h4 class="section-toggle">
                    <span class="section-title">${title}</span>
                    <i class="fas fa-chevron-down"></i>
                </h4>
                <div class="section-content ${isOpen ? 'active' : ''}">
                    ${content}
                </div>
            </div>
        `;
    };

    // Helper to create static (non-collapsible) section
    const createStaticSection = (title, content) => {
        return `
            <div class="static-section">
                <h4 class="section-title-static">${title}</h4>
                <div class="section-content-static">
                    ${content}
                </div>
            </div>
        `;
    };

    // Build all sections
    let sections = [];

    // 1. Description (Static - Always Visible)
    sections.push(createStaticSection(
        'Overview',
        `<p class="section-description">${project.full_description}</p>`
    ));

    // 2. Context (Static - Always Visible)
    if (project.context) {
        sections.push(createStaticSection(
            'Context',
            `<p class="section-description">${project.context}</p>`
        ));
    }

    // 3. Problem vs Solution (Swipe Cards)
    if (project.challenges && project.challenges.length) {
        const challengesContent = `
            <div class="swipe-hint">
                <span class="hint-text"><i class="fas fa-hand-pointer"></i> Swipe or drag to view solutions</span>
            </div>
            ${project.challenges.map((challenge, idx) =>
                `<div class="challenge-item" data-index="${idx}">
                    <div class="swipe-container">
                        <div class="swipe-wrapper">
                            <div class="swipe-card problem-card">
                                <div class="card-header">Problem ${idx + 1}</div>
                                <div class="card-content">
                                    ${challenge.problem}
                                </div>
                            </div>
                            <div class="swipe-card solution-card">
                                <div class="card-header">Solution ${idx + 1}</div>
                                <div class="card-content">
                                    ${challenge.solution}
                                </div>
                            </div>
                        </div>
                        <div class="swipe-indicators">
                            <span class="swipe-dot active" data-slide="0"></span>
                            <span class="swipe-dot" data-slide="1"></span>
                        </div>
                    </div>
                </div>`
            ).join('')}
        `;
        sections.push(createSection('Challenges & Solutions', challengesContent));
    }

    // 4. Constraints and Problems
    let constraintsHtml = '';
    if (project.problem && project.problem.length) {
        constraintsHtml += `
            <div class="constraint-block">
                <h5>Key Problems</h5>
                <ul class="constraint-list">
                    ${project.problem.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    if (project.constraints && project.constraints.length) {
        constraintsHtml += `
            <div class="constraint-block">
                <h5>Constraints</h5>
                <ul class="constraint-list">
                    ${project.constraints.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    if (constraintsHtml) {
        sections.push(createSection('Scope & Constraints', constraintsHtml));
    }

    // 5. Approach and Architecture
    let approachHtml = '';
    if (project.approach) {
        approachHtml += `<p class="section-description">${project.approach}</p>`;
    }
    if (project.architecture && project.architecture.length) {
        approachHtml += `
            <div class="architecture-grid">
                ${project.architecture.map(arch => 
                    `<div class="architecture-item">
                        <i class="fas fa-cube"></i>
                        <span>${arch}</span>
                    </div>`
                ).join('')}
            </div>
        `;
    }
    if (approachHtml) {
        sections.push(createSection('Strategy & Architecture', approachHtml));
    }

    // 6. Features
    if (project.features && project.features.length) {
        const featuresContent = `
            <div class="features-nodes" id="featuresNodes">
                ${project.features.map((feature, idx) =>
                    `<div class="feature-node" data-index="${idx}">
                        <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="feature-content">${feature}</div>
                    </div>`
                ).join('')}
            </div>
        `;
        sections.push(createSection('Key Features', featuresContent));
    }

    // 7. Workflow
    if (project.workflow && project.workflow.length) {
        const workflowContent = `
            <div class="workflow-nodes" id="workflowNodes">
                ${project.workflow.map((step, idx) =>
                    `<div class="workflow-node" data-index="${idx}">
                        <div class="step-number">Step ${idx + 1}</div>
                        <div class="step-content">${step}</div>
                        ${idx < project.workflow.length - 1 ? '<div class="step-arrow"><i class="fas fa-arrow-down"></i></div>' : ''}
                    </div>`
                ).join('')}
            </div>
        `;
        sections.push(createSection('Process Flow', workflowContent));
    }

    // 8. Impact and Contribution
    let impactHtml = '';
    if (project.contribution && project.contribution.length) {
        impactHtml += `
            <div class="impact-block">
                <h5>Contributions</h5>
                <ul class="impact-list">
                    ${project.contribution.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    if (project.impact && project.impact.length) {
        impactHtml += `
            <div class="impact-block">
                <h5>Business Impact</h5>
                <ul class="impact-list">
                    ${project.impact.map(i => `<li>${i}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    if (project.lessons_learned) {
        impactHtml += `
            <div class="impact-block">
                <h5>Key Learnings</h5>
                <p class="section-description">${project.lessons_learned}</p>
            </div>
        `;
    }
    if (impactHtml) {
        sections.push(createSection('Impact & Outcomes', impactHtml));
    }

    modalBody.innerHTML = sections.join('');

    modal.classList.remove('hidden');
    modal.classList.add('opening');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        modal.classList.remove('opening');
    }, 350);
    
    const nodesContainer = document.getElementById('workflowNodes');
    if (nodesContainer) animateWorkflow(nodesContainer);

    const featuresContainer = document.getElementById('featuresNodes');
    if (featuresContainer) animateWorkflow(featuresContainer);

    // Initialize expandable sections
    initializeExpandableSections();

    // Initialize challenge swipe cards
    initializeChallengeToggles();
}

// Initialize challenge swipe cards
function initializeChallengeToggles() {
    initializeSwipeCards();
}

// Skills Section Initialization
function initializeSkills() {
    const skills = window.data.sections.skills;
    
    document.getElementById('skillsSubtitle').textContent = skills.subtitle;
    document.getElementById('skillsTitle').textContent = skills.title;

    const skillsTree = document.getElementById('skillsTree');
    
    skillsTree.innerHTML = skills.technical.map(category => `
        <div class="skill-category fade-in">
            <div class="skill-header" data-category="${category.category.toLowerCase().replace(/\s+/g, '-')}">
                <div class="skill-title-wrapper">
                    <i class="fas fa-${category.icon} skill-icon"></i>
                    <h3 class="skill-title">${category.category}</h3>
                </div>
                <i class="fas fa-chevron-right skill-toggle"></i>
            </div>
            <div class="skill-items" id="${category.category.toLowerCase().replace(/\s+/g, '-')}">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: ${skill.level}%"></div>
                        </div>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('') + `
        <div class="skill-category fade-in">
            <div class="skill-header" data-category="methodologies">
                <div class="skill-title-wrapper">
                    <i class="fas fa-diagram-project skill-icon"></i>
                    <h3 class="skill-title">Methodologies</h3>
                </div>
                <i class="fas fa-chevron-right skill-toggle"></i>
            </div>
            <div class="skill-items" id="methodologies">
                <div class="methodology-list">
                    ${skills.methodologies.flatMap(m => m.skills).map(skill => 
                        `<span class="methodology-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;

    // Add click handlers for skill categories
    document.querySelectorAll('.skill-header').forEach(header => {
        header.addEventListener('click', () => {
            const items = header.nextElementSibling;
            const toggle = header.querySelector('.skill-toggle');
            
            items.classList.toggle('active');
            toggle.style.transform = items.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
        });
    });
}

// Achievements Section Initialization
function initializeAchievements() {
    const achievements = window.data.sections.achievements;
    
    document.getElementById('achievementsSubtitle').textContent = achievements.subtitle;
    document.getElementById('achievementsTitle').textContent = achievements.title;

    const achievementsGrid = document.getElementById('achievementsGrid');
    
    achievementsGrid.innerHTML = achievements.awards.map(award => `
        <div class="achievement-card fade-in">
            <div class="achievement-icon">
                <i class="fas fa-${award.icon}"></i>
            </div>
            <h3 class="achievement-title">${award.title}</h3>
            <p class="achievement-org">${award.organization}</p>
            <p class="achievement-description">${award.description}</p>
        </div>
    `).join('') + achievements.certifications.map(cert => `
        <div class="achievement-card fade-in">
            <div class="achievement-icon">
                <i class="fas fa-certificate"></i>
            </div>
            <h3 class="achievement-title">${cert.name}</h3>
            <p class="achievement-org">${cert.issuer}</p>
            <p class="achievement-description">Graduated in ${cert.date}</p>
        </div>
    `).join('');

    // Create dynamic stats
    const statsContainer = document.getElementById('statsContainer');
    statsContainer.innerHTML = `
        <div class="stat-box fade-in">
            <span class="stat-box-number">${calculateProjectCount()}</span>
            <span class="stat-box-label">Major Projects</span>
        </div>
        <div class="stat-box fade-in">
            <span class="stat-box-number">${calculateYearsExperience()}+</span>
            <span class="stat-box-label">Years Experience</span>
        </div>
        <div class="stat-box fade-in">
            <span class="stat-box-number">${calculateDegreeCount()}</span>
            <span class="stat-box-label">Degrees</span>
        </div>
    `;
}

// Contact Section Initialization
function initializeContact() {
    const contact = window.data.sections.contact;
    
    document.getElementById('contactSubtitle').textContent = contact.subtitle;
    document.getElementById('contactTitle').textContent = contact.title;
    document.getElementById('contactDescription').textContent = contact.description;

    // Create contact methods
    const contactMethods = document.getElementById('contactMethods');
    contactMethods.innerHTML = contact.contact_methods.map(method => `
        <a href="${method.url}${method.value}" class="contact-method" ${method.type !== 'email' ? 'target="_blank"' : ''}>
            <i class="${method.type === 'email' ? 'fas fa-envelope' : `fab fa-${method.icon}`}"></i>
            <span>${method.label}</span>
        </a>
    `).join('');

}

// Footer Initialization
function initializeFooter() {
    const footer = window.data.footer;
    const currentYear = calculateCurrentYear();
    const launchYear = window.data.site_configuration.launch_year;
    
    const footerText = document.getElementById('footerText');
    footerText.innerHTML = `
        <p>&copy; ${currentYear} Jessica Hakmeh. All rights reserved.</p>
        <p class="built-with">${footer.built_with.replace('HTML, CSS, JavaScript', '<i class="fas fa-heart"></i> HTML, CSS, JavaScript')}</p>
    `;

    const footerSocial = document.getElementById('footerSocial');
    footerSocial.innerHTML = footer.social_links.map(link => `
        <a href="${link.url}" target="_blank" aria-label="${link.platform}">
            <i class="${link.icon === 'envelope' ? 'fas' : 'fab'} fa-${link.icon}"></i>
        </a>
    `).join('');
}

// Animation Functions
function initializeAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special handling for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                    }, 100);
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(element => observer.observe(element));
}

function initializeCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const modal = document.getElementById('projectModal');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
        // Show cursor on first movement
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        // Only hide cursor if modal is not open
        if (modal.classList.contains('hidden')) {
            cursor.style.opacity = '0';
            follower.style.opacity = '0';
        }
    });

    // Hover effect for clickable elements
    const clickables = document.querySelectorAll('a, button, .skill-category, .project-card');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    if (!navToggle) return;
    
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

function initializeScrollSpy() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function initializeTypingAnimation() {
    const heroTitle = document.getElementById('heroTitle');
    const cursor = document.getElementById('typingCursor');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentTitle = window.heroTitles[titleIndex];
        
        if (isDeleting) {
            heroTitle.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroTitle.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % window.heroTitles.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    setTimeout(typeEffect, 2000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});