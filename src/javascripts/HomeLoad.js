import mainimage from "../images/restaurant_image.jpg";


export function HomeLoad() {
    const contentElement = document.querySelector('#content');

    if(!contentElement){
        console.log("no content element");
        return 0;
    }

    contentElement.innerHTML = '';


    const childDiv = document.createElement('div');
    childDiv.classList.add('child');


    const image = document.createElement('img');
    image.classList.add('mainimage');
    image.src = mainimage;
    image.alt = 'restaurant image';
    childDiv.appendChild(image);


    const mainTextPartDiv = document.createElement('div');
    mainTextPartDiv.classList.add('maintextpart');


    const heading = document.createElement('h2');
    heading.textContent = 'Savor the Flavor: Your Fast Food Fix is Here!';
    mainTextPartDiv.appendChild(heading);


    const paragraph = document.createElement('p');
    paragraph.textContent = "Welcome to SHAKE SHACK, where speed meets flavor! We're dedicated to serving mouthwatering burgers, crispy fries, and refreshing beverages that hit the spot every time. Whether you're craving a quick lunch, a family dinner, or a midnight snack, we've got you covered. Our commitment is to deliver the best fast-food experience with fresh ingredients, speedy service, and unbeatable taste.";
    mainTextPartDiv.appendChild(paragraph);


    const subHeading = document.createElement('h3');
    subHeading.textContent = "Join us for a meal that's fast, fun, and flavorful!";
    mainTextPartDiv.appendChild(subHeading);


    childDiv.appendChild(mainTextPartDiv);


    contentElement.appendChild(childDiv);
}
