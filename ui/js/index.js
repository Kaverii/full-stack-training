// Best Practice: Use descriptive variable names and organize data at the top
const skillsList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js'
];

// Best Practice: Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements we want to interact with
    const skillsContainer = document.querySelector('.skills-container');
    const readMoreButton = document.getElementById('readMoreBtn');
    const contactForm = document.querySelector('.contact-form');
    const submitButton = document.getElementById('submitBtn');

    // Display skills when page loads
    displaySkills();

    // Add event listeners
    readMoreButton.addEventListener('click', handleReadMore);
    submitButton.addEventListener('click', handleFormSubmit);
    addSmoothScrolling();

    // Function to display skills
    function displaySkills() {
        // Best Practice: Use template literals for readable HTML strings
        skillsList.forEach(function(skill) {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.innerHTML = `
                <h3>${skill}</h3>
            `;
            skillsContainer.appendChild(skillElement);
        });
    }

    // Handle Read More button click
    function handleReadMore() {
        // Get the paragraph element
        const aboutParagraph = document.querySelector('.about-text p');
        const shortText = "Hello! I'm a passionate web developer who loves creating beautiful and functional websites.";
        const fullText = shortText + " I enjoy learning new technologies and solving interesting problems.";

        // Toggle between short and full text
        if (readMoreButton.textContent === 'Read More') {
            aboutParagraph.textContent = fullText;
            readMoreButton.textContent = 'Read Less';
        } else {
            aboutParagraph.textContent = shortText;
            readMoreButton.textContent = 'Read More';
        }
    }

    // Handle form submission with validation
    function handleFormSubmit(event) {
        // Prevent form from submitting to a server
        event.preventDefault();

        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Get error message elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
        const successMessage = document.getElementById('successMessage');

        // Reset error messages
        hideAllErrors();

        // Validate each field
        let isValid = true;

        // Name validation
        if (!nameInput.value.trim()) {
            showError(nameError, 'Please enter your name');
            isValid = false;
        }

        // Email validation
        if (!emailInput.value.trim()) {
            showError(emailError, 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        }

        // Message validation
        if (!messageInput.value.trim()) {
            showError(messageError, 'Please enter your message');
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            // Show success message
            successMessage.textContent = 'Thank you for your message!';
            successMessage.classList.add('show');

            // Clear form fields
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        }
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Helper function to show error message
    function showError(element, message) {
        element.textContent = message;
        element.classList.add('show');
    }

    // Helper function to hide all error messages
    function hideAllErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
            element.classList.remove('show');
        });
        document.getElementById('successMessage').classList.remove('show');
    }

    // Add smooth scrolling to navigation links
    function addSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                // Prevent default jump-to-section behavior
                event.preventDefault();
                
                // Get the target section id from the href
                const sectionId = this.getAttribute('href');
                
                // Scroll smoothly to the section
                document.querySelector(sectionId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
});

/* 
JavaScript Best Practices Demonstrated:
1. Code Organization: Related code is grouped together
2. Comments: Clear explanations of what the code does
3. Event Delegation: Events are added after DOM is loaded
4. Error Handling: Form validation before submission
5. Clean Code: Consistent formatting and naming conventions
6. Modularity: Each function has a single responsibility
7. Performance: DOM elements are cached in variables
*/
