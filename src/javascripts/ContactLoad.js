export function ContactLoad(contentElement) {
    if (!contentElement) {
        console.log("no content element");
        return;
    }

    contentElement.innerHTML = ''; // Clear the content element

    // Create the main container for the Contact Us page
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    // Add a header for the page
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';
    contactHeader.classList.add('contact-header');
    contactDiv.appendChild(contactHeader);

    // Create a form for the contact page
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    // Name input field
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Your Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('placeholder', 'Enter your name');
    nameInput.setAttribute('required', true);

    // Email input field
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Your Email:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');
    emailInput.setAttribute('required', true);

    // Message text area
    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Your Message:';
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('placeholder', 'Enter your message');
    messageInput.setAttribute('required', true);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Send Message';

    // Append the fields to the form
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageInput);
    contactForm.appendChild(submitButton);

    // Append the form to the contact page
    contactDiv.appendChild(contactForm);

    // Append the contactDiv to the content element
    contentElement.appendChild(contactDiv);

    // Add an event listener for the form submission (for now just log the form data)
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        // Simulate form submission (you can replace this with actual backend logic later)
        console.log('Form submitted:');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        // Clear the form
        contactForm.reset();

        // Show a thank you message
        alert('Thank you for reaching out to us!');
    });
}
