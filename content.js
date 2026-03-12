window.data = {
  "site_configuration": {
    "site_title": "Jessica Hakmeh",
    "site_url": "",
    "launch_year": 2026,
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
        { "id": "projects", "label": "Projects", "icon": "rocket" },
        { "id": "skills", "label": "Skills", "icon": "star" },
        { "id": "achievements", "label": "Achievements", "icon": "trophy" },
        { "id": "contact", "label": "Contact", "icon": "phone" }
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
        "short_bio": "I transform workflows through innovative technology solutions.",
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
          "My approach combines thorough system analysis with hands-on full-stack development.",
          "I was recognized as Employee of the Year in 2025 for creating solutions that optimize workflows."
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
            "Built a secure streaming portal",
            "Seeking PMP certificate elligibility and partaking",
            "Obtained a Master's degree at 23"
          ]
        },
        "image": "media/about.jpg"
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
      "id": "outpatient-queue-system",
      "name": "Paperless Outpatient Workflow & Queue Management",
      "short_description": "Digitization of outpatient workflow and queue tracking.",
      "full_description": "A custom system designed to digitize and streamline the hospital outpatient workflow, replacing paper-based coordination with a real-time queue and workflow management platform.",
      "company": "Saint Louis Hospital",
      "category": "Healthcare Systems",
      "year": "2026",
      "featured": true,
      "icon": "users",
      "role": "Systems Analyst, Lead Developer & QA Secialist",
      "context": "Outpatient workflow relied heavily on paper forms and manual coordination between reception, nurses, and physicians.",
      "problem": [
        "Unpredictable patient wait times",
        "Manual paperwork slowing staff operations",
        "Lack of real-time visibility on patient flow and journey"
      ],
      "constraints": [
        "Minimal disruption to daily operations during deployment",
        "Staff with varying technical proficiency",
        "Transparency and time tracking"
      ],
      "approach": "Redesigned the entire outpatient workflow after mapping and studying staff operations to design a customized digital and fully paperless system replicating the real-world process.",
      "architecture": [
        "Web interface for staff",
        "Queue management engine",
        "Database tracking visit flow",
        "Analytics dashboard",
        "Documents Management System"
      ],
      "workflow": [
        "Patient arrival",
        "Visit registration",
        "Queue assignment",
        "Billing Approval",
        "Triage to department(s)",
        "Department service",
        "Checkout"
      ],
      "features": [
        "Real-time queue monitoring",
        "Workflow stage tracking",
        "Operational analytics",
        "Role-based access"
      ],
      "contribution": [
        "Workflow analysis and enhancement",
        "System architecture design",
        "Full-stack development",
        "Testing and deployment",
        "Staff training"
      ],
      "technologies": ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      "challenges": [
        {
          "problem": "Resistance to digital transition from staff accustomed to paper workflows",
          "solution": "Conducted hands-on training sessions, multiple drill sessions and designed intuitive interface mirroring familiar paper forms"
        },
        {
          "problem": "Ensuring system reliability during peak outpatient hours",
          "solution": "Implemented robust error handling and fallback procedures with real-time data synchronization"
        }
      ],
      "impact": [
        "Reduced patient wait times",
        "Improved coordination between departments",
        "Enabled monitoring of operational bottlenecks",
        "Reduced paper usage and associated costs",
        "Enabled real time data access from different departments to same patients' information"
      ],
      "lessons_learned": "Direct observation of existing workflows before designing solutions leads to better adoption and more effective systems.",
      "tags": ["workflow", "healthcare", "queue system", "PHP", "digital transformation"],
      "media": {
        "cover_image": "",
        "gallery": [],
        "diagrams": [],
        "demo_video": null
      }
    },
    {
      "id": "patient-search-engine",
      "name": "Patient Identity Search & Name Standardization Engine",
      "short_description": "Smart patient lookup system preventing duplicate MRNs.",
      "full_description": "A sophisticated search engine capable of interpreting variations in patient name spelling across languages, preventing duplicate medical records and improving lookup accuracy.",
      "company": "Saint Louis Hospital",
      "category": "Healthcare Data",
      "year": "2026",
      "featured": true,
      "icon": "search",
      "role": "Systems Designer & Developer",
      "context": "Patient names were often entered inconsistently due to language differences and manual typing.",
      "problem": [
        "Duplicate medical record numbers",
        "Difficulty finding patients in the system",
        "Inconsistent spelling across languages"
      ],
      "constraints": [
        "Large existing database with legacy data",
        "Multiple languages and naming conventions",
        "Real-time lookup requirements"
      ],
      "approach": "Developed a search engine capable of interpreting variations in spelling and identifying potential duplicate records using phonetic algorithms and fuzzy matching.",
      "architecture": [
        "Search index layer",
        "Phonetic transformation engine",
        "Duplicate detection algorithm",
        "Admin review interface"
      ],
      "workflow": [
        "Name input",
        "Phonetic normalization",
        "Database query",
        "Result ranking"
      ],
      "features": [
        "Name normalization logic",
        "Phonetic search variations",
        "Eligibility flagging for employee benefits",
        "Flagging tests with multiple items to bill"
      ],
      "contribution": [
        "Algorithm design",
        "Database optimization",
        "Search logic implementation",
        "Testing with real patient data"
      ],
      "technologies": ["static HTML/CSS", "Python", "JavaScript"],
      "challenges": [
        {
          "problem": "Balancing search sensitivity vs. performance with large dataset",
          "solution": "Implemented cached values and optimized query indexing"
        },
        {
          "problem": "Handling multilingual name variations",
          "solution": "Developed custom normalization rules for common local name patterns"
        }
      ],
      "impact": [
        "Reduced patients with duplicate records",
        "Improved patient lookup speed",
        "Better data quality"
      ],
      "lessons_learned": "Simple fuzzy matching isn't enough; lookup needs to be organized.",
      "tags": ["data quality", "search engine", "healthcare", "PHP", "MySQL", "algorithms"],
      "media": {
        "cover_image": "",
        "gallery": [],
        "diagrams": [],
        "demo_video": null
      }
    },
    {
      "id": "newborn-virtual-visit",
      "name": "Newborn Virtual Visit Portal",
      "short_description": "Live streaming for hospital nurseries",
      "full_description": "A secure portal that streams baby cribs in the nursery via public links valid for 24 hours, allowing families to virtually visit their newborns.",
      "company": "Saint Louis Hospital",
      "category": "Healthcare",
      "year": "2025",
      "featured": true,
      "icon": "video",
      "role": "Lead Developer",
      "context": "Families unable to visit the hospital nursery in person needed a way to see their newborns remotely, especially during visiting restrictions.",
      "problem": [
        "Families unable to visit nursery in person",
        "Security concerns with public streaming",
        "Need for simple access without complex login"
      ],
      "constraints": [
        "Hospital network security policies",
        "Bandwidth limitations",
        "24/7 reliability requirement"
      ],
      "approach": "Created a token-based secure streaming system with time-limited access, balancing security with ease of use for family members.",
      "architecture": [
        "Streaming server with FFMPEG",
        "Token generation service",
        "Web interface",
        "Fortigate Firewall security layer"
      ],
      "workflow": [
        "Camera setup in nursery",
        "Token generation for newborn",
        "Link distribution to family",
        "24-hour access window",
        "Live streaming with comments"
      ],
      "features": [
        "Live video streaming over web interface",
        "Comment functionality for family members",
        "Token-based access system (24-hour validity)",
        "Secure streaming with Fortigate Firewall"
      ],
      "contribution": [
        "System analysis and engineering",
        "Full development",
        "Security configuration",
        "Deployment and testing"
      ],
      "technologies": ["PHP", "FFMPEG", "Fortigate Firewall", "JavaScript", "HTML5"],
      "challenges": [
        {
          "problem": "Ensuring secure streaming while maintaining accessibility for family members",
          "solution": "Implemented token-based authentication with 24-hour expiry and firewall protection"
        },
        {
          "problem": "Real-time streaming with hospital network constraints",
          "solution": "Optimized FFMPEG settings for bandwidth efficiency and implemented adaptive bitrate streaming"
        }
      ],
      "impact": [
        "Successfully deployed in hospital nursery",
        "Enabled hundreds of virtual visits",
        "Positive feedback from families unable to visit in person"
      ],
      "lessons_learned": "Security and usability can coexist with thoughtful design; token-based systems provide both protection and simplicity for end users.",
      "tags": ["streaming", "healthcare", "PHP", "security", "FFMPEG", "video"],
      "media": {
        "cover_image": "",
        "gallery": [],
        "diagrams": [],
        "demo_video": null
      }
    },
    {
      "id": "secure-feedback-system",
      "name": "Token-Based Patient Feedback System",
      "short_description": "Secure one-time feedback links for patients.",
      "full_description": "A token-based feedback system that generates unique, single-use URLs for patients to submit feedback, eliminating duplicate submissions and ensuring data reliability.",
      "company": "Saint Louis Hospital",
      "category": "Automation",
      "year": "2024",
      "featured": false,
      "icon": "comment",
      "role": "System engineer & Lead Developer",
      "context": "Patient feedback collection lacked validation mechanisms, leading to unreliable data from multiple submissions.",
      "problem": [
        "Feedback forms could be submitted multiple times",
        "No validation for patient identity"
      ],
      "constraints": [
        "Integration with existing feedback platform (Tally.so)",
        "Automated distribution without manual intervention",
        "Simple patient experience"
      ],
      "approach": "Created a token-based link system where each patient receives a unique URL valid for one submission, integrated with hospital's discharge workflow.",
      "architecture": [
        "Token generation service",
        "Database for token tracking",
        "Webhook handler",
        "Integration layer with Tally.so"
      ],
      "workflow": [
        "Patient discharge trigger",
        "Unique token generation",
        "Email/SMS distribution",
        "Form access validation",
        "Submission tracking",
        "Token invalidation"
      ],
      "features": [
        "Unique token generation",
        "Single-use submission validation",
        "Webhook integration",
        "Automated link distribution",
        "Integration with Queue System"
      ],
      "contribution": [
        "System architecture",
        "Token service development",
        "Webhook implementation",
        "Integration testing"
      ],
      "technologies": ["Python", "Webhook", "Tally.so", "SMTP", "SMS API"],
      "challenges": [
        {
          "problem": "Ensuring tokens cannot be guessed or brute-forced",
          "solution": "Implemented cryptographically secure random tokens with sufficient entropy"
        },
        {
          "problem": "Real-time validation without impacting user experience",
          "solution": "Asynchronous validation with cached token status for quick verification"
        }
      ],
      "impact": [
        "Improved feedback data reliability",
        "Eliminated duplicate submissions",
        "Automated previously manual distribution process"
      ],
      "lessons_learned": "Simple token-based validation can significantly improve data quality without adding friction to the user experience.",
      "tags": ["Python", "automation", "feedback", "tokens", "webhook", "Tally.so"],
      "media": {
        "cover_image": "",
        "gallery": [],
        "diagrams": [],
        "demo_video": null
      }
    },
    {
      "id": "crm-digital-transformation",
      "name": "Multi-Company CRM Implementation",
      "short_description": "Centralized CRM and marketing automation.",
      "full_description": "A comprehensive Zoho One CRM implementation across multiple companies, centralizing lead management, automating marketing campaigns, and integrating communication channels.",
      "company": "AnglesDiffering Holding",
      "category": "CRM",
      "year": "2025",
      "featured": true,
      "icon": "chart-line",
      "role": "CRM Implementation Consultant",
      "context": "Lead and client data was scattered across different platforms with no centralized view or automated follow-up processes.",
      "problem": [
        "Leads scattered across different platforms",
        "No centralized client database",
        "Inefficient manual follow-up",
        "Inconsistent customer communication"
      ],
      "constraints": [
        "Multiple companies with different data needs",
        "Existing customer data to migrate",
        "Budget limitations",
        "Staff training requirements"
      ],
      "approach": "Implemented Zoho One CRM and integrated it across multiple company websites and communication channels with customized modules for each business unit.",
      "architecture": [
        "Zoho One platform",
        "CRM modules per company",
        "Website form integrations",
        "Chatbot automation",
        "Email marketing campaigns"
      ],
      "workflow": [
        "Lead capture from websites/chat",
        "Automated categorization",
        "Assignment to sales team",
        "Nurturing campaigns",
        "Conversion tracking",
        "Analytics reporting"
      ],
      "features": [
        "Lead categorization",
        "Automated chatbot",
        "Integrated website forms",
        "Marketing campaign automation",
        "Centralized client database"
      ],
      "contribution": [
        "Requirements gathering",
        "CRM configuration",
        "Data migration",
        "Integration development",
        "Team training"
      ],
      "technologies": ["Zoho One", "Zoho CRM", "Zoho Campaigns", "Chatbot API", "Web forms"],
      "challenges": [
        {
          "problem": "Migrating legacy data from disparate sources without loss",
          "solution": "Developed custom data cleaning and migration scripts with validation steps"
        },
        {
          "problem": "Different business processes across companies",
          "solution": "Created modular CRM structure with company-specific fields and workflows while maintaining unified reporting"
        }
      ],
      "impact": [
        "Centralized client database across all companies",
        "Improved lead management and tracking",
        "Automated marketing outreach",
        "Better visibility into sales pipeline"
      ],
      "lessons_learned": "Successful CRM implementation is 30% technology and 70% process alignment and user adoption.",
      "tags": ["CRM", "Zoho", "automation", "marketing", "integration", "digital transformation"],
      "media": {
        "cover_image": "",
        "gallery": [],
        "diagrams": [],
        "demo_video": null
      }
    }
  ]
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
          "label": "jessicahakmeh@gmail.com",
          "icon": "envelope",
          "url": "mailto:jessicahakmeh@gmail.com",
          "primary": true
        },
        {
          "type": "whatsapp",
          "label": "+961 71 709 907",
          "icon": "whatsapp",
          "url": "https://wa.me/96171709907",
          "primary": true
        },
        {
          "type": "linkedin",
          "label": "linkedin.com/in/jessicahakmeh",
          "icon": "linkedin",
          "url": "https://linkedin.com/in/jessicahakmeh",
          "primary": false
        }
      ],
      "availability": "Open to opportunities"
    }
  },
  "footer": {
    "built_with": "Built with HTML, CSS, JavaScript",
    "social_links": [
      { "platform": "LinkedIn", "icon": "linkedin", "url": "https://linkedin.com/in/jessicahakmeh" },
      { "platform": "WhatsApp", "icon": "whatsapp", "url": "https://wa.me/96171709907" },
      { "platform": "Email", "icon": "envelope", "url": "mailto:jessicahakmeh@gmail.com" }
    ],
    "back_to_top": true
  }

};
