window.data = {
  "site_configuration": {
    "site_title": "Jessica Hakmeh",
    "site_url": "",
    "launch_year": 2023,
    "current_year_dynamic": true,
    "theme": {
      "colors": {
        "primary": "#0a192f",
        "secondary": "#112240",
        "tertiary": "#1a365d",
        "accent": "#64ffda",
        "accent_secondary": "#4fb3d9",
        "accent_tertiary": "#64b3f4",
        "text": {
          "light": "#ccd6f6",
          "lighter": "#a8b2d1",
          "lightest": "#8892b0"
        }
      },
      "font_family": "'Inter', 'Segoe UI', sans-serif",
      "layout": "single-page",
      "dark_mode": true
    },
    "navigation": {
      "menu_items": [
        { "id": "home", "label": "Home", "icon": "home" },
        { "id": "about", "label": "About", "icon": "user" },
        { "id": "experience", "label": "Experience", "icon": "briefcase" },
        { "id": "projects", "label": "Projects", "icon": "code" },
        { "id": "skills", "label": "Skills", "icon": "star" },
        { "id": "achievements", "label": "Achievements", "icon": "trophy" },
        { "id": "contact", "label": "Contact", "icon": "envelope" }
      ],
      "smooth_scroll": true,
      "sticky_nav": true,
      "cta_button": {
        "text": "Let's Talk",
        "link": "#contact"
      }
    },
    "seo": {
      "meta_description": "Digital Transformation Specialist with expertise in healthcare IT, system analysis, and full-stack development. MIS graduate from Lebanese University.",
      "meta_keywords": ["Digital Transformation", "Healthcare IT", "System Analysis", "PHP Developer", "Python", "MIS", "Lebanon"],
      "author": "Jessica Hakmeh"
    }
  },
  "sections": {
    "home": {
      "hero": {
        "greeting": "Hi, I'm",
        "name": "Jessica Hakmeh",
        "titles": ["Digital Transformation Specialist", "MIS Graduate", "Healthcare IT Innovator"],
        "typing_animation": true,
        "short_bio": "I transform healthcare workflows through innovative technology solutions.",
        "cta_buttons": [
          { "text": "View Projects", "link": "#projects", "primary": true },
          { "text": "Contact Me", "link": "#contact", "primary": false }
        ],
        "social_links": {
          "linkedin": { "url": "", "icon": "linkedin", "show": true },
          "github": { "url": "", "icon": "github", "show": false },
          "whatsapp": { "url": "", "icon": "whatsapp", "show": true },
          "email": { "url": "", "icon": "mail", "show": true }
        },
        "profile_image": "",
        "background_style": "solid"
      }
    },
    "about": {
      "title": "About Me",
      "subtitle": "Get to know me",
      "content": {
        "bio_paragraphs": [
          "I'm a Digital Transformation Specialist with a Master's degree in Management Information Systems from Lebanese University (2025). I'm passionate about leveraging technology to solve real-world problems, particularly in healthcare settings.",
          "At SLH, I've developed three major systems that have streamlined hospital operations—from a newborn virtual visit portal to an outpatient queue system that minimizes patient wait times. My approach combines thorough system analysis with hands-on full-stack development.",
          "I was recognized as Employee of the Year in 2025 for my contributions to digital transformation initiatives. I believe in creating solutions that are not just technically sound but also intuitive for end-users."
        ],
        "personal_details": {
          "name": "Jessica Hakmeh",
          "nationality": "Lebanese",
          "languages": ["Arabic (Native)", "English (Professional)", "French (Conversational)"],
          "education": [
            "Master's in MIS - Lebanese University (2025)",
            "Bachelor's in MIS - Lebanese University (2023)"
          ],
          "fun_facts": [
            "Built a live newborn streaming portal",
            "Employee of the Year 2025",
            "Master's degree at 23"
          ]
        },
        "image": ""
      }
    },
    "experience": {
      "title": "Experience",
      "subtitle": "Where I've worked",
      "employment": [
        {
          "company": "SLH",
          "logo": "",
          "position": "Digital Transformation Specialist",
          "start_date": "2023",
          "end_date": "Present",
          "location": "",
          "description": "Leading digital transformation initiatives focused on healthcare workflow optimization and patient experience enhancement.",
          "highlights": [
            "Developed 3 major hospital systems currently in production",
            "Reduced patient wait times through workflow optimization",
            "Implemented secure streaming solution for newborn nursery",
            "Named Employee of the Year 2025"
          ],
          "technologies": ["PHP", "Python", "MySQL", "FFMPEG", "Fortigate Firewall"],
          "projects": [
            { "project_id": "newborn-virtual-visit", "relationship": "Lead Developer" },
            { "project_id": "outpatient-queue-system", "relationship": "Full-Stack Developer & Business Analyst" },
            { "project_id": "token-form-system", "relationship": "Lead Developer" }
          ]
        }
      ],
      "education": [
        {
          "institution": "Lebanese University",
          "logo": "",
          "degree": "Master's Degree in Management Information Systems",
          "date": "2025",
          "description": "Focused on digital transformation strategies and advanced system analysis.",
          "achievements": []
        },
        {
          "institution": "Lebanese University",
          "logo": "",
          "degree": "Bachelor's Degree in Management Information Systems",
          "date": "2023",
          "description": "Foundation in programming, databases, and information systems.",
          "achievements": []
        }
      ]
    },
    "projects": {
      "title": "Projects",
      "subtitle": "What I've built",
      "featured_projects": [
        {
          "id": "newborn-virtual-visit",
          "name": "Newborn Virtual Visit Portal",
          "short_description": "Live streaming for hospital nurseries",
          "full_description": "A secure portal that streams baby cribs in the nursery via public links valid for 24 hours, allowing families to virtually visit their newborns.",
          "company": "SLH",
          "company_link": "#experience",
          "goal": "offer virtual visit services for newborn babies",
          "category": "Healthcare",
          "featured": true,
          "cover_image": "",
          "gallery": [],
          "features": [
            "Live video streaming over web interface",
            "Comment functionality for family members",
            "Token-based access system (24-hour validity)",
            "Secure streaming with Fortigate Firewall"
          ],
          "contribution": [
            "system analysis and engineering",
            "full development"
          ],
          "technologies": ["PHP", "FFMPEG", "Fortigate Firewall"],
          "challenges": [
            {
              "problem": "Ensuring secure streaming while maintaining accessibility for family members",
              "solution": "Implemented token-based authentication with 24-hour expiry and firewall protection"
            },
            {
              "problem": "Real-time streaming with hospital network constraints",
              "solution": "Optimized FFMPEG settings for bandwidth efficiency"
            }
          ],
          "outcome": "Successfully deployed in hospital nursery, enabling hundreds of virtual visits for families unable to visit in person.",
          "role": "Lead Developer",
          "tags": ["streaming", "healthcare", "PHP", "security"]
        },
        {
          "id": "outpatient-queue-system",
          "name": "Outpatient Workflow Queue System",
          "short_description": "Patient wait time optimization",
          "full_description": "A custom queue management system tailored to the hospital's exact workflow, designed to minimize patient wait times and streamline outpatient operations.",
          "company": "SLH",
          "company_link": "#experience",
          "goal": "structure the outpatient workflow to minimize patient wait times",
          "category": "Healthcare",
          "featured": true,
          "cover_image": "",
          "gallery": [],
          "features": [
            "Custom workflow engine matching hospital processes",
            "Real-time queue tracking",
            "Patient wait time analytics",
            "Staff performance dashboard"
          ],
          "contribution": [
            "system analysis and engineering",
            "requirements gathering",
            "workflow design",
            "full development",
            "testing",
            "user training",
            "system deployment",
            "R&D"
          ],
          "technologies": ["PHP", "MySQL"],
          "challenges": [
            {
              "problem": "Complex hospital workflow with multiple departments and exceptions",
              "solution": "Spent 2 months shadowing staff to map exact workflows before development"
            },
            {
              "problem": "Staff resistance to new system",
              "solution": "Comprehensive training program and involved staff in testing phase"
            }
          ],
          "outcome": "Reduced average patient wait time and improved staff efficiency.",
          "role": "Full-Stack Developer & Business Analyst",
          "tags": ["queue management", "workflow", "PHP", "MySQL"]
        },
        {
          "id": "token-form-system",
          "name": "Token-Based Form Submission System",
          "short_description": "Duplicate-free data collection",
          "full_description": "A token-based system that generates unique links with redirection to either forms or blocking pages, ensuring accurate form submission without duplicate or false data.",
          "company": "SLH",
          "company_link": "#experience",
          "goal": "enable accurate form submission without duplicated data or false data",
          "category": "Data Management",
          "featured": true,
          "cover_image": "",
          "gallery": [],
          "features": [
            "Unique token generation for each submission",
            "Smart redirection based on token validity",
            "Integration with tally.so forms",
            "Webhook-based data validation"
          ],
          "contribution": [
            "system analysis and engineering",
            "requirements gathering",
            "integration",
            "full development",
            "testing"
          ],
          "technologies": ["Python", "tally.so", "webhook"],
          "challenges": [
            {
              "problem": "Preventing multiple form submissions from same patient",
              "solution": "Implemented token expiry and usage tracking"
            }
          ],
          "outcome": "Eliminated duplicate data entries and improved data accuracy.",
          "role": "Lead Developer",
          "tags": ["Python", "forms", "data integrity", "tokens"]
        }
      ],
      "other_projects": []
    },
    "skills": {
      "title": "Skills",
      "subtitle": "What I bring to the table",
      "technical": [
        {
          "category": "Programming Languages",
          "icon": "code",
          "skills": [
            { "name": "PHP", "level": 90, "years": 2 },
            { "name": "Python", "level": 80, "years": 1 },
            { "name": "JavaScript", "level": 75, "years": 2 },
            { "name": "SQL", "level": 85, "years": 2 }
          ]
        },
        {
          "category": "Databases & Tools",
          "icon": "database",
          "skills": [
            { "name": "MySQL", "level": 85, "years": 2 },
            { "name": "FFMPEG", "level": 70, "years": 1 },
            { "name": "Fortigate Firewall", "level": 65, "years": 1 },
            { "name": "tally.so", "level": 80, "years": 1 }
          ]
        }
      ],
      "methodologies": [
        {
          "category": "System Analysis",
          "skills": ["Requirements Gathering", "Workflow Design", "System Architecture", "Integration Planning"]
        },
        {
          "category": "Development Lifecycle",
          "skills": ["Full Development", "Testing", "Deployment", "User Training", "R&D"]
        }
      ],
      "soft_skills": [
        { "name": "User Training", "level": 90 },
        { "name": "Cross-functional Communication", "level": 85 },
        { "name": "Problem Solving", "level": 95 },
        { "name": "Adaptability", "level": 90 },
        { "name": "Project Management", "level": 75 }
      ],
      "domains": ["Healthcare", "Hospital Workflows and Operations", "Patient Experience", "Data Management"]
    },
    "achievements": {
      "title": "Achievements",
      "subtitle": "Recognition & Milestones",
      "awards": [
        {
          "title": "Employee of the Year 2025",
          "organization": "SLH",
          "date": "2025",
          "description": "Recognized for exceptional contributions to digital transformation initiatives, including three major hospital systems.",
          "icon": "trophy",
          "featured": true
        }
      ],
      "certifications": [
        {
          "name": "Master's in MIS",
          "issuer": "Lebanese University",
          "date": "2025"
        },
        {
          "name": "Bachelor's in MIS",
          "issuer": "Lebanese University",
          "date": "2023"
        }
      ]
    },
    "contact": {
      "title": "Get In Touch",
      "subtitle": "Let's work together",
      "description": "I'm currently available for digital transformation projects, consulting, or full-time opportunities. Whether you have a question or just want to say hi, I'll get back to you!",
      "contact_methods": [
        {
          "type": "email",
          "value": "",
          "label": "jessica@gmail.com",
          "icon": "envelope",
          "url": "mailto:",
          "primary": true
        },
        {
          "type": "whatsapp",
          "value": "",
          "label": "+961 XX XXX XXX",
          "icon": "whatsapp",
          "url": "https://wa.me/",
          "primary": true
        },
        {
          "type": "linkedin",
          "value": "",
          "label": "linkedin.com/in/jessicahakmeh",
          "icon": "linkedin",
          "url": "",
          "primary": false
        }
      ],
      "contact_form": {
        "enabled": true,
        "fields": [
          { "name": "name", "type": "text", "placeholder": "Your Name", "required": true },
          { "name": "email", "type": "email", "placeholder": "Your Email", "required": true },
          { "name": "subject", "type": "text", "placeholder": "Subject", "required": false },
          { "name": "message", "type": "textarea", "placeholder": "Your Message", "required": true, "rows": 5 }
        ],
        "submit_text": "Send Message",
        "success_message": "Thanks for reaching out! I'll get back to you soon."
      },
      "availability": "Open to opportunities"
    }
  },
  "footer": {
    "built_with": "Built with HTML, CSS, JavaScript",
    "social_links": [
      { "platform": "LinkedIn", "icon": "linkedin" },
      { "platform": "WhatsApp", "icon": "whatsapp" },
      { "platform": "Email", "icon": "envelope" }
    ],
    "back_to_top": true
  }
};