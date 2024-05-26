document.addEventListener('DOMContentLoaded', function() {
    let users = [];
    
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerText = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    function navigateToSection(sectionId) {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    }

    function handleFormSubmit(event, formSelector, successMessage, redirectSectionId) {
        event.preventDefault();
        const form = document.querySelector(formSelector);
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate a backend call
        setTimeout(() => {
            console.log(data);
            showNotification(successMessage, 'success');
            if (redirectSectionId) {
                navigateToSection(redirectSectionId);
            }
        }, 1000);

        if (formSelector === '#signup-form') {
            users.push(data);
            updateCohortList();
        }
    }

    function updateCohortList() {
        const cohortList = document.querySelector('.cohort-list');
        cohortList.innerHTML = '';
        users.forEach(user => {
            const memberItem = document.createElement('div');
            memberItem.className = 'member-item';
            memberItem.innerHTML = `
                <img src="${URL.createObjectURL(user['profile-photo'])}" alt="${user.name}">
                <h3>${user.name}</h3>
                <p>Profession: ${user.profession}</p>
                <p>${user.bio}</p>
            `;
            cohortList.appendChild(memberItem);
        });
    }

    function toggleDropdown() {
        const dropdown = document.getElementById('profile-dropdown');
        dropdown.classList.toggle('hidden');
    }

    // Sign-up form submission
    const signupForm = document.querySelector('#signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#signup-form', 'Profile created successfully!', 'explore-section');
        });
    }

    // Profile form submission
    const profileForm = document.querySelector('#profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#profile-form', 'Profile updated successfully!');
        });
    }

    // Job post form submission
    const jobPostForm = document.querySelector('#job-post-form');
    if (jobPostForm) {
        jobPostForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#job-post-form', 'Job posted successfully!');
        });
    }

    // Service list form submission
    const serviceListForm = document.querySelector('#service-list-form');
    if (serviceListForm) {
        serviceListForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#service-list-form', 'Service listed successfully!');
        });
    }

    // Product list form submission
    const productListForm = document.querySelector('#product-list-form');
    if (productListForm) {
        productListForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#product-list-form', 'Product listed successfully!');
        });
    }

    // Message form submission
    const messageForm = document.querySelector('#message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#message-form', 'Message sent successfully!');
        });
    }

    // Networking events form submission
    const networkingEventsForm = document.querySelector('#networking-events-form');
    if (networkingEventsForm) {
        networkingEventsForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#networking-events-form', 'Networking event saved successfully!');
        });
    }

    // Achievements form submission
    const achievementsForm = document.querySelector('#achievements-form');
    if (achievementsForm) {
        achievementsForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#achievements-form', 'Achievements saved successfully!');
        });
    }

    // Collaboration form submission
    const colabForm = document.querySelector('#colab-form');
    if (colabForm) {
        colabForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#colab-form', 'Collaboration request posted successfully!');
        });
    }

    // Navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navigateToSection(this.getAttribute('href').substring(1));
        });
    });

    // FAQ toggle
    document.querySelectorAll('.faq-item h3').forEach(faqHeader => {
        faqHeader.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });

    // Testimonials slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 5000);
    }

    // Contact form submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            handleFormSubmit(event, '#contact-form', 'Message sent successfully!');
        });
    }

    // Dynamic content loading (example)
    function loadDynamicContent() {
        const jobListings = document.querySelector('.job-listings');
        if (jobListings) {
            // Simulate fetching job listings from backend
            const jobs = [
                { title: 'Graphic Designer', description: 'Design graphics for our marketing team.', budget: '$500', deadline: '2024-06-01' },
                { title: 'Web Developer', description: 'Develop a new website for our client.', budget: '$1000', deadline: '2024-07-01' }
            ];
            jobs.forEach(job => {
                const jobItem = document.createElement('div');
                jobItem.className = 'job-item';
                jobItem.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>${job.description}</p>
                    <p>Budget: ${job.budget}</p>
                    <p>Deadline: ${job.deadline}</p>
                `;
                jobListings.appendChild(jobItem);
            });
        }

        const serviceListings = document.querySelector('.service-listings');
        if (serviceListings) {
            // Simulate fetching service listings from backend
            const services = [
                { name: 'Photography', description: 'Professional photography services.', price: '$200/hr' },
                { name: 'Video Editing', description: 'High-quality video editing.', price: '$50/hr' }
            ];
            services.forEach(service => {
                const serviceItem = document.createElement('div');
                serviceItem.className = 'service-item';
                serviceItem.innerHTML = `
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    <p>Price: ${service.price}</p>
                `;
                serviceListings.appendChild(serviceItem);
            });
        }

        const productListings = document.querySelector('.product-listings');
        if (productListings) {
            // Simulate fetching product listings from backend
            const products = [
                { name: 'T-shirt', description: 'High-quality cotton T-shirt.', price: '$25', image: 'tshirt.jpg' },
                { name: 'Mug', description: 'Ceramic mug with custom design.', price: '$15', image: 'mug.jpg' }
            ];
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src="${product.image}" alt="${product.name}">
                `;
                productListings.appendChild(productItem);
            });
        }

        const messageList = document.querySelector('.message-list');
        if (messageList) {
            // Simulate fetching messages from backend
            const messages = [
                { recipient: 'John Doe', content: 'Hello, I would like to collaborate with you on a new project.' },
                { recipient: 'Jane Smith', content: 'Can you provide more details about your services?' }
            ];
            messages.forEach(message => {
                const messageItem = document.createElement('div');
                messageItem.className = 'message-item';
                messageItem.innerHTML = `
                    <h3>To: ${message.recipient}</h3>
                    <p>${message.content}</p>
                `;
                messageList.appendChild(messageItem);
            });
        }

        const cohortList = document.querySelector('.cohort-list');
        if (cohortList) {
            // Simulate fetching cohort members from backend
            const members = [
                { name: 'Alice Johnson', profession: 'Graphic Designer', bio: 'Creative graphic designer with 5 years of experience.' },
                { name: 'Bob Williams', profession: 'Web Developer', bio: 'Experienced web developer specializing in front-end development.' }
            ];
            members.forEach(member => {
                const memberItem = document.createElement('div');
                memberItem.className = 'member-item';
                memberItem.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>Profession: ${member.profession}</p>
                    <p>${member.bio}</p>
                `;
                cohortList.appendChild(memberItem);
            });
        }
    }

    // Load dynamic content
    loadDynamicContent();

    // Show the sign-up section by default
    navigateToSection('signup-section');
});
