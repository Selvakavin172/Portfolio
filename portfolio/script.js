document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS if available
    if (window.emailjs) {
        emailjs.init('lFYLgAxRJPNmBDQau');
    }

    // Typing effect for the badge
    const typingBadge = document.getElementById('typing-badge');
    const text = typingBadge.getAttribute('data-text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingBadge.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // Show welcome toast
    const toastElement = document.getElementById('welcomeToast');
    if (toastElement) {
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }

    // Skill modal details stored in JS
    const skillDescriptions = {
        fullStack: {
            title: 'Expert in Full Stack Development',
            description: 'Designing complete web solutions across frontend and backend systems with a focus on reliability and user experience.'
        },
        backendApi: {
            title: 'Strong Backend & API Design Skills',
            description: 'Building robust APIs and backend services that scale and perform reliably for enterprise-grade applications.'
        },
        scalableWeb: {
            title: 'Scalable Web Application Builder',
            description: 'Creating scalable web applications using modern frameworks and architecture patterns to support high performance and growth.'
        },
        problemSolver: {
            title: 'Problem Solver & Fast Learner',
            description: 'Quickly adapting to new technologies and solving complex problems with practical, well-tested solutions.'
        },
        coreJava: {
            title: 'Core Java',
            description: 'Expertise in Core Java fundamentals, object-oriented design, and enterprise application development.'
        },
        springBoot: {
            title: 'Spring Boot',
            description: 'Building production-ready microservices and backend applications with Spring Boot and Spring Cloud.'
        },
        angular: {
            title: 'Angular',
            description: 'Developing responsive and modern single-page applications using Angular and TypeScript.'
        },
        restApis: {
            title: 'REST APIs',
            description: 'Architecting RESTful APIs with clear contracts and strong security for reliable integration.'
        },
        microservices: {
            title: 'Microservices',
            description: 'Designing microservices-based systems for small, decoupled services that scale independently.'
        },
        sqlAws: {
            title: 'SQL, AWS',
            description: 'Using SQL databases and AWS cloud services to build reliable, production-ready backends.'
        },

        java8: {
            title: "Java 8",
            description: "Hands-on experience with Streams, Lambda expressions, Functional Interfaces, and modern Java features."
        },

        oracleSql: {
            title: "Oracle SQL",
            description: "Writing optimized SQL queries, joins, stored procedures, and database performance tuning."
        },

        bootstrap: {
            title: "Bootstrap",
            description: "Responsive UI development using Bootstrap grid system and reusable components."
        },

        html: {
            title: "HTML5",
            description: "Semantic and accessible HTML structure for modern web applications."
        },

        css: {
            title: "CSS3",
            description: "Styling responsive user interfaces using Flexbox, Grid, and animations."
        },

        angularMaterial: {
            title: "Angular Material",
            description: "Building clean and professional UI components using Angular Material library."
        },

        awsAthena: {
            title: "AWS Athena",
            description: "Serverless querying service used to analyze large datasets stored in AWS S3."
        },

        awsOpensearch: {
            title: "AWS OpenSearch",
            description: "Search and analytics engine used for logs, monitoring, and real-time insights."
        },

        awsCloudWatch: {
            title: "AWS CloudWatch",
            description: "Monitoring and logging AWS resources and applications for performance tracking and debugging."
        },

        git: {
            title: "Git",
            description: "Version control system for source code management, branching, and collaboration."
        },

        deployments: {
            title: "Deployments",
            description: "Deploying applications to production using CI/CD pipelines and automation tools."
        }
    };

    const skillModal = document.getElementById('skillModal');
    if (skillModal) {
        skillModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const skillKey = button.getAttribute('data-skill-key');
            const skill = skillDescriptions[skillKey] || { title: 'Skill Details', description: 'More information coming soon.' };
            document.getElementById('skillModalLabel').textContent = skill.title;
            document.getElementById('skillModalDesc').textContent = skill.description;
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
});

function sendEmail(event) {
    event.preventDefault();
    const to = document.querySelector('#EmailId');
    const name = document.querySelector('#EmailName');
    const mobile = document.querySelector('#EmailMobile');
    const desc = document.querySelector('#EmailDesc');

    if (name.value.trim().length < 3 || to.value.trim().length < 5 || desc.value.trim().length < 10) {
        alert('Please enter valid information before submitting.');
        return;
    }

    const msg = `Dear ${name.value.trim()},\n\nThank you for reaching out through my portfolio contact form. I have received your message and appreciate the time you took to contact me.\n\nI will get back to you as soon as possible.\n\nIf you have any urgent inquiries or require immediate assistance, please don\'t hesitate to contact me directly at +91 9360148930.\n\nReason for Contact:\n${desc.value.trim()}\n\nThanks & Regards,\nKavin`;

    if (window.emailjs) {
        emailjs.send('service_58q09di', 'template_3up0ubm', {
            message: msg,
            subject: 'Submission Confirmation: Contact Us Form Received',
            to_email: to.value.trim()
        }).then(() => {
            name.value = '';
            to.value = '';
            mobile.value = '';
            desc.value = '';
            alert('We have received your information. Thank you!');
        }, (error) => {
            alert('Sorry, we could not send your message right now. Please try again later.');
            console.error('EmailJS error:', error);
        });
    } else {
        alert('Email service is not available. Please try again later.');
    }
}
