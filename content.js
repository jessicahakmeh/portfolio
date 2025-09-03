// Portfolio JavaScript - Complete functionality and data
// This file contains all content data and interactive features

// Portfolio Data
const portfolioData = {
    hero: {
        name: "Jessica Hakmeh",
        title: "Software Developer & UI/UX Enthusiast",
        description: "I create elegant, innovative digital experiences with a focus on performance and user satisfaction."
    },
    skills: [
        {
            category: "Digital Transformation",
            icon: "fas fa-laptop-code",
            items: [
                "Assess technological need, gather requirements",
                "Design solutions to streamline and automate traditional workflows",
                "Innovate and renovate systems and procedures",
                "Process optimization and digital strategy development",
                "Change management and digital adoption training"
            ]
        },
        {
            category: "DevOps & Development",
            icon: "fas fa-server",
            items: [
                "Project Management: UML requirements, timeline management, bottleneck supervision",
                "Cloud and Local Hosting with DNS, SSL, and VPS management",
                "Web Programming: HTML5, CSS3, JavaScript ES6+, PHP, React, Vue.js",
                "Native Programming: Python, Java, C#, Node.js",
                "Database Management: MySQL, PostgreSQL, MongoDB",
                "Version Control: Git, GitHub, GitLab, CI/CD pipelines"
            ]
        },
        {
            category: "Networking & Infrastructure",
            icon: "fas fa-network-wired",
            items: [
                "Network topology planning and architecture design",
                "Routing configuration using Mikrotik RouterOS",
                "Layer 3 switching and VLAN management",
                "Ubiquiti WAN management and optimization",
                "Firewall monitoring and security (FortiGate)",
                "Network troubleshooting and performance optimization"
            ]
        },
        {
            category: "Systems Administration",
            icon: "fas fa-cogs",
            items: [
                "Systems backup and disaster recovery planning",
                "VMware vSphere environment management",
                "Active Directory and Exchange Server administration",
                "Linux/Windows server management",
                "Monitoring and alerting system implementation",
                "Security compliance and vulnerability management"
            ]
        },
        {
            category: "Media & Design",
            icon: "fas fa-photo-video",
            items: [
                "Advertisement design: posters, banners, digital campaigns",
                "Digital signage administration and content management",
                "Content creation and video editing",
                "Brand identity development",
                "UI/UX design and prototyping",
                "Graphics optimization and web performance"
            ]
        },
        {
            category: "Data & Analytics",
            icon: "fas fa-chart-line",
            items: [
                "Data visualization and dashboard creation",
                "Business intelligence and reporting",
                "Database optimization and performance tuning",
                "API development and integration",
                "Analytics implementation and tracking",
                "Machine learning and predictive modeling"
            ]
        }
    ],
    projects: [
        {
            title: "Healthcare Management System",
            icon: "fas fa-hospital",
            description: "Comprehensive hospital management system developed for SLH Healthcare, streamlining patient records, appointments, and administrative operations with modern web technologies.",
            link: "#",
            technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
        },
        {
            title: "E-Commerce Platform",
            icon: "fas fa-shopping-cart",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and advanced analytics dashboard. Built with modern frameworks for optimal performance.",
            link: "#",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
        },
        {
            title: "Digital Marketing Portfolio",
            icon: "fas fa-paint-brush",
            description: "Creative brand identities and marketing materials for various clients, including logo design, social media campaigns, and digital advertising solutions.",
            link: "#",
            technologies: ["Adobe Creative Suite", "Figma", "WordPress", "CSS3"]
        },
        {
            title: "Network Infrastructure Project",
            icon: "fas fa-network-wired",
            description: "Enterprise network design and implementation for a 200+ employee organization, including VLAN segmentation, security protocols, and monitoring systems.",
            link: "#",
            technologies: ["Mikrotik", "FortiGate", "Ubiquiti", "VLAN"]
        },
        {
            title: "Business Intelligence Dashboard",
            icon: "fas fa-chart-bar",
            description: "Real-time analytics dashboard providing key business metrics and insights, with interactive visualizations and automated reporting capabilities.",
            link: "#",
            technologies: ["Python", "D3.js", "PostgreSQL", "Docker"]
        },
        {
            title: "Mobile App Development",
            icon: "fas fa-mobile-alt",
            description: "Cross-platform mobile application for appointment scheduling and patient management, featuring offline capabilities and push notifications.",
            link: "#",
            technologies: ["React Native", "Firebase", "Redux", "API Integration"]
        }
    ],
    experience: [
        {
            date: "2022 - Present",
            title: "Senior Software Developer & Systems Architect",
            company: "SLH Healthcare Solutions",
            description: "Lead development of healthcare management systems, overseeing digital transformation initiatives and managing cloud infrastructure. Responsible for system architecture, security implementation, and team leadership.",
            achievements: [
                "Reduced system response time by 40% through optimization",
                "Led team of 5 developers on critical projects",
                "Implemented CI/CD pipeline reducing deployment time by 60%"
            ]
        },
        {
            date: "2020 - 2022",
            title: "Full Stack Developer & DevOps Engineer",
            company: "Digital Solutions Inc.",
            description: "Developed and maintained web applications using modern JavaScript frameworks. Managed server infrastructure and implemented automated deployment processes for multiple client projects.",
            achievements: [
                "Built 15+ responsive web applications",
                "Achieved 99.9% server uptime",
                "Reduced infrastructure costs by 30%"
            ]
        },
        {
            date: "2019 - 2020",
            title: "Network Administrator & IT Specialist",
            company: "TechCorp Solutions",
            description: "Managed enterprise network infrastructure, provided technical support, and implemented security protocols. Oversaw system backups and disaster recovery procedures.",
            achievements: [
                "Managed network for 200+ users",
                "Implemented zero-downtime backup system",
                "Improved network security by 50%"
            ]
        },
        {
            date: "2018 - 2019",
            title: "Junior Developer & Designer",
            company: "Creative Agency Studio",
            description: "Worked on web development projects and created digital marketing materials. Gained experience in client communication and project management while building technical skills.",
            achievements: [
                "Completed 25+ client projects",
                "Increased client satisfaction rate to 95%",
                "Learned 5 new programming languages"
            ]
        },
        {
            date: "2017 - 2018",
            title: "IT Support Specialist",
            company: "Regional Medical Center",
            description: "Provided technical support for hospital staff, maintained computer systems, and assisted with software implementations. First exposure to healthcare IT systems.",
            achievements: [
                "Resolved 95% of tickets within SLA",
                "Trained 50+ staff members on new systems",
                "Reduced system downtime by 25%"
            ]
        }
    ],
    certificates: [
        {
            title: "AWS Certified Solutions Architect",
            organization: "Amazon Web Services",
            date: "2023",
            link: "#",
            description: "Professional certification demonstrating expertise in designing distributed systems on AWS platform."
        },
        {
            title: "Google Cloud Professional Developer",
            organization: "Google Cloud",
            date: "2023",
            link: "#",
            description: "Certification validating skills in developing scalable applications using Google Cloud technologies."
        },
        {
            title: "Microsoft Azure Fundamentals",
            organization: "Microsoft",
            date: "2022",
            link: "#",
            description: "Foundation certification covering core Azure services and cloud computing concepts."
        },
        {
            title: "Certified Ethical Hacker (CEH)",
            organization: "EC-Council",
            date: "2022",
            link: "#",
            description: "Information security certification focusing on ethical hacking methodologies and penetration testing."
        },
        {
            title: "Project Management Professional (PMP)",
            organization: "Project Management Institute",
            date: "2021",
            link: "#",
            description: "Global standard for project management excellence, covering project lifecycle management and leadership."
        },
        {
            title: "Cisco Certified Network Associate (CCNA)",
            organization: "Cisco Systems",
            date: "2021",
            link: "#",
            description: "Networking certification validating skills in network fundamentals, security, and automation."
        },
        {
            title: "Google UX Design Professional Certificate",
            organization: "Google via Coursera",
            date: "2020",
            link: "#",
            description: "Comprehensive program covering user experience design principles, prototyping, and user research."
        },
        {
            title: "Meta React Developer Certificate",
            organization: "Meta (Facebook)",
            date: "2020",
            link: "#",
            description: "Specialized certification in React.js development, covering hooks, state management, and advanced patterns."
        }
    ]
};

// DOM Elements
let navToggle, navMenu, backToTop, currentYear;

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    navToggle = document.getElementById('nav-toggle');
    navMenu = document.getElementById('nav-menu');
    backToTop = document.getElementById('back-to-top');
    currentYear = document.getElementById('current-year');
    
    console.log('Portfolio initializing...');
    
    initializePortfolio();
    setupEventListeners();
    setupScrollAnimations();
    updateCurrentYear();
    
    console.log('Portfolio initialized successfully');
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

// Typing animation for hero name
function startTypingAnimation() {
    const heroName = document.getElementById('hero-name');
    const text = portfolioData.hero.name;
    
    if (!heroName) return;
    
    heroName.textContent = '';
    
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
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    portfolioData.skills.forEach((skillCategory, index) => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-category fade-in';
        skillElement.style.animationDelay = `${index * 0.1}s`;
        
        skillElement.innerHTML = `
            <div class="skill-header" onclick="toggleSkill(this)">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <i class="${skillCategory.icon} skill-icon"></i>
                    <h3 class="skill-title">${skillCategory.category}</h3>
                </div>
                <i class="fas fa-chevron-down skill-toggle"></i>
            </div>
            <div class="skill-items">
                ${skillCategory.items.map(item => `<div class="skill-item">${item}</div>`).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(skillElement);
    });
}

// Toggle skill dropdown
function toggleSkill(header) {
    const skillItems = header.nextElementSibling;
    const toggle = header.querySelector('.skill-toggle');
    
    skillItems.classList.toggle('active');
    toggle.style.transform = skillItems.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    
    // Add stagger animation to skill items
    if (skillItems.classList.contains('active')) {
        const items = skillItems.querySelectorAll('.skill-item');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate-fade-in');
        });
    }
}

// Populate projects section
function populateProjectsSection() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card fade-in';
        projectElement.style.animationDelay = `${index * 0.2}s`;
        
        projectElement.innerHTML = `
            <div class="project-card-inner">
                <div class="project-card-front">
                    <i class="${project.icon} project-icon"></i>
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <div class="project-card-back">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    ${project.technologies ? 
                        `<div class="project-tech" style="margin-bottom: 1rem; font-size: 0.9rem; color: var(--accent-color);">
                            ${project.technologies.join(' • ')}
                        </div>` : ''
                    }
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
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                ${exp.company ? `<h4 style="color: var(--accent-color); margin-bottom: 0.8rem; font-weight: 500;">${exp.company}</h4>` : ''}
                <p class="timeline-description">${exp.description}</p>
                ${exp.achievements ? 
                    `<div style="margin-top: 1rem;">
                        <h5 style="color: var(--text-light); margin-bottom: 0.5rem; font-size: 1rem;">Key Achievements:</h5>
                        <ul style="list-style: none; padding-left: 0;">
                            ${exp.achievements.map(achievement => 
                                `<li style="padding: 0.2rem 0; color: var(--text-lighter); position: relative; padding-left: 1.5rem;">
                                    <i class="fas fa-check" style="position: absolute; left: 0; top: 0.4rem; color: var(--accent-color); font-size: 0.8rem;"></i>
                                    ${achievement}
                                </li>`
                            ).join('')}
                        </ul>
                    </div>` : ''
                }
            </div>
            <div class="timeline-dot"></div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// Populate certificates section
function populateCertificatesSection() {
    const certificatesContainer = document.getElementById('certificates-container');
    if (!certificatesContainer) return;
    
    certificatesContainer.innerHTML = '';
    
    portfolioData.certificates.forEach((cert, index) => {
        const certElement = document.createElement('div');
        certElement.className = 'certificate-card fade-in';
        certElement.style.animationDelay = `${index * 0.15}s`;
        
        certElement.innerHTML = `
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-org">${cert.organization}</p>
            ${cert.date ? `<p style="color: var(--text-lightest); margin-bottom: 1rem; font-size: 0.95rem;">${cert.date}</p>` : ''}
            ${cert.description ? `<p style="color: var(--text-lighter); margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.5;">${cert.description}</p>` : ''}
            <a href="${cert.link}" class="certificate-link" target="_blank">
                <i class="fas fa-external-link-alt" style="margin-right: 0.5rem;"></i>
                View Certificate
            </a>
        `;
        
        certificatesContainer.appendChild(certElement);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Handle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Handle resize events
    window.addEventListener('resize', debounce(handleResize, 250));
}

// Handle scroll events
function handleScroll() {
    const scrollY = window.pageYOffset;
    const navbar = document.getElementById('navbar');
    
    // Update navbar appearance
    if (scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
    }
    
    // Update active navigation link
    updateActiveNavLink();
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollY = window.pageYOffset;
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Setup scroll animations using Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special handling for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                }
                
                // Special handling for certificate cards
                if (entry.target.classList.contains('certificate-card')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.15}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form labels
        document.querySelectorAll('.form-group label').forEach(label => {
            label.style.top = '1.2rem';
            label.style.fontSize = '1rem';
        });
        
    }, 2000);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-primary);
        color: var(--primary-color);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: var(--transition);
        box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Handle window resize
function handleResize() {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

// Update current year in footer
function updateCurrentYear() {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

// Utility function for debouncing
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Export functions for potential external use
window.portfolioFunctions = {
    toggleSkill,
    showNotification,
    updateActiveNavLink
};