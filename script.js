// DOM Elements
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const backToTop = document.getElementById('back-to-top');
        const currentYear = document.getElementById('current-year');

        // Initialize the portfolio
        document.addEventListener('DOMContentLoaded', function() {
            initializePortfolio();
            setupEventListeners();
            setupScrollAnimations();
            updateCurrentYear();
        });

        // Initialize portfolio with loaded data
        function initializePortfolio() {
            populateHeroSection();
            populateSkillsSection();
            populateProjectsSection();
            populateExperienceSection();
            populateCertificatesSection();
            
            // Start typing animation after a brief delay
            setTimeout(() => {
                startTypingAnimation();
            }, 500);
        }

        // Populate hero section
        function populateHeroSection() {
            const heroTitle = document.getElementById('hero-title');
            const heroDescription = document.getElementById('hero-description');
            
            if (heroTitle) heroTitle.textContent = portfolioData.hero.title;
            if (heroDescription) heroDescription.textContent = portfolioData.hero.description;
        }

function startTypingAnimation() {
    const heroName = document.getElementById('hero-name');
    const text = portfolioData.hero.name;

    if (!heroName) return;

    heroName.textContent = ''; // Clear current name

    // Split text into individual letters and wrap each in a span
    const letters = text.split('').map((letter, index) => {
        if (letter === ' ') {
            return '<span class="letter space">&nbsp;</span>';
        }
        return `<span class="letter" style="animation-delay: ${index * 0.1}s">${letter}</span>`;
    });
    
    heroName.innerHTML = letters.join('');
    
    // Add completion class after all letters are animated
    setTimeout(() => {
        heroName.classList.add('typing-complete');
    }, text.length * 100 + 500);
}


        // Populate skills section
        function populateSkillsSection() {
            const skillsContainer = document.getElementById('skills-container');
            
            portfolioData.skills.forEach(skillCategory => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-category fade-in';
                
                skillElement.innerHTML = `
                    <div class="skill-header">
                        <div class="skill-title">
                            <i class="${skillCategory.icon} skill-icon"></i>
                            <span>${skillCategory.category}</span>
                        </div>
                        <div class="skill-toggle">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div class="skill-items">
                        ${skillCategory.items.map(item => `<div class="skill-item">${item}</div>`).join('')}
                    </div>
                `;
                
                skillsContainer.appendChild(skillElement);
                
                // Add click event to toggle skill items
                const skillHeader = skillElement.querySelector('.skill-header');
                const skillItems = skillElement.querySelector('.skill-items');
                const skillToggle = skillElement.querySelector('.skill-toggle i');
                
                skillHeader.addEventListener('click', () => {
                    skillItems.classList.toggle('active');
                    skillToggle.classList.toggle('fa-chevron-down');
                    skillToggle.classList.toggle('fa-chevron-up');
                    
                    // Add stagger animation to skill items
                    if (skillItems.classList.contains('active')) {
                        const items = skillItems.querySelectorAll('.skill-item');
                        items.forEach((item, index) => {
                            item.style.animationDelay = `${index * 0.1}s`;
                            item.classList.add('animate-fade-in');
                        });
                    }
                });
            });
        }

        // Populate projects section
        function populateProjectsSection() {
            const projectsContainer = document.getElementById('projects-container');
            
            portfolioData.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-card fade-in';
                
                projectElement.innerHTML = `
                    <div class="project-card-inner">
                        <div class="project-card-front">
                            <i class="${project.icon} project-icon"></i>
                            <h3 class="project-title">${project.title}</h3>
                        </div>
                        <div class="project-card-back">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <a href="${project.link}" class="project-link">View Project</a>
                        </div>
                    </div>
                `;
                
                projectsContainer.appendChild(projectElement);
            });
        }

        // Populate experience section
        function populateExperienceSection() {
            const timelineContainer = document.getElementById('timeline-container');
            
            portfolioData.experience.forEach((exp, index) => {
                const expElement = document.createElement('div');
                expElement.className = 'timeline-item fade-in';
                
                expElement.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${exp.date}</div>
                        <h3 class="timeline-title">${exp.title}</h3>
                        <p class="timeline-description">${exp.description}</p>
                    </div>
                `;
                
                timelineContainer.appendChild(expElement);
            });
        }

        // Populate certificates section
        function populateCertificatesSection() {
            const certificatesContainer = document.getElementById('certificates-container');
            
            portfolioData.certificates.forEach(cert => {
                const certElement = document.createElement('div');
                certElement.className = 'certificate-card fade-in';
                
                certElement.innerHTML = `
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-org">${cert.organization}</p>
                    <a href="${cert.link}" class="certificate-link">View Certificate</a>
                `;
                
                certificatesContainer.appendChild(certElement);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Mobile navigation toggle
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Back to top button
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Setup scroll animations
        function setupScrollAnimations() {
            // Header scroll effect
            const navbar = document.getElementById('navbar');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Show/hide back to top button
                if (window.scrollY > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
                
                // Animate elements on scroll
                animateOnScroll();
            });
            
            // Initial check for elements in view
            animateOnScroll();
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Animate elements when they come into view
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
                
                if (isVisible) {
                    element.classList.add('animate');
                }
            });
        }

        // Update current year in footer
        function updateCurrentYear() {
            if (currentYear) {
                currentYear.textContent = new Date().getFullYear();
            }
        }