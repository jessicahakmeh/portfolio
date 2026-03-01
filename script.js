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
    const navSocial = document.getElementById('navSocial');
    const menuItems = window.data.site_configuration.navigation.menu_items;
    
    // Create navigation links
    navMenu.innerHTML = menuItems.map(item => 
        `<a href="#${item.id}" class="nav-link" data-target="${item.id}">${item.label}</a>`
    ).join('');

    // Create social icons
    const socialLinks = window.data.sections.home.hero.social_links;
    navSocial.innerHTML = Object.entries(socialLinks)
        .filter(([_, data]) => data.show)
        .map(([platform, data]) => 
            `<a href="${data.url}" target="_blank" class="social-icon" aria-label="${platform}">
                <i class="fab fa-${data.icon}"></i>
            </a>`
        ).join('');
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
    
    projectsGrid.innerHTML = projects.featured_projects.map(project => `
        <div class="project-card fade-in" data-id="${project.id}">
            <div class="project-card-inner">
                <div class="project-card-front">
                    <div class="folder-icon">
                        <i class="fas fa-folder-open"></i>
                        <i class="fas fa-${getProjectIcon(project)} folder-overlay"></i>
                    </div>
                    <h3 class="project-title">${project.name}</h3>
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
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.modal-close');

    // delegate clicks
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-more')) {
            const id = e.target.dataset.id;
            const project = window.data.sections.projects.featured_projects.find(p => p.id === id);
            if (project) {
                // build modal content
                modalBody.innerHTML = `
                    <h2>${project.name}</h2>
                    <p>${project.full_description}</p>
                    <h4>Features</h4>
                    <ul>${project.features.map(f => `<li>${f}</li>`).join('')}</ul>
                    <h4>Challenges</h4>
                    <ul>${project.challenges.map(c => `<li><strong>${c.problem}</strong>: ${c.solution}</li>`).join('')}</ul>
                `;
                modal.classList.remove('hidden');
            }
        }

        // close interactions
        if (e.target === modal || e.target === closeBtn) {
            modal.classList.add('hidden');
        }
    });
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
            <i class="fas ${method.type === 'email' ? 'fa-envelope' : `fa-brands fa-${method.icon}`}"></i>
            <span>${method.label}</span>
        </a>
    `).join('');

    // Create contact form
    const contactFormContainer = document.getElementById('contactFormContainer');
    if (contact.contact_form.enabled) {
        contactFormContainer.innerHTML = `
            <form id="contactForm" class="contact-form">
                ${contact.contact_form.fields.map(field => `
                    <div class="form-group">
                        ${field.type === 'textarea' 
                            ? `<textarea id="${field.name}" name="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''} rows="${field.rows}"></textarea>`
                            : `<input type="${field.type}" id="${field.name}" name="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>`
                        }
                        <label for="${field.name}">${field.placeholder}</label>
                    </div>
                `).join('')}
                <button type="submit" class="btn btn-primary submit-btn">
                    <span>${contact.contact_form.submit_text}</span>
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        `;

        // Add form submit handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert(contact.contact_form.success_message);
            this.reset();
        });
    }
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
        <a href="#" target="_blank" aria-label="${link.platform}">
            <i class="fab fa-${link.icon}"></i>
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
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        follower.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        follower.style.opacity = '0';
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