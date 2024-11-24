import "../styling/style.css";
import { HomeLoad } from "./HomeLoad";
import { MenuLoad } from "./MenuLoad";
import { ContactLoad } from "./ContactLoad";

console.log("js file");

const navButtons = document.querySelectorAll('nav button');

const contentElement = document.querySelector('#content');

HomeLoad(contentElement);



// Add event listeners to each button to handle page navigation
navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.textContent.trim();

        // Handle navigation based on button text
        switch (buttonText) {
            case 'Home':
                console.log('Navigating to Home');
                HomeLoad(contentElement);
                break;
            case 'Menu':
                console.log('Navigating to Menu');
                MenuLoad(contentElement);
                break;
            case 'Contact Us':
                console.log('Navigating to Contact Us');
                ContactLoad(contentElement);
                break;
            default:
                console.log('Unknown page');
        }
    });
});



