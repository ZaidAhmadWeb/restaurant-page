
export function MenuLoad(contentElement) {
    if (!contentElement) {
        console.log("no content element");
        return;
    }

    contentElement.innerHTML = '';

    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Our Menu';
    menuHeader.classList.add('menu-header');
    menuDiv.appendChild(menuHeader);

    
    const menuItems = [
        { name: 'Classic Burger', price: '$8.99' },
        { name: 'Cheese Fries', price: '$4.99' },
        { name: 'Chicken Nuggets (10 pcs)', price: '$6.49' },
        { name: 'Veggie Wrap', price: '$7.49' },
        { name: 'Soft Drink', price: '$1.99' },
        { name: 'Milkshake', price: '$3.99' },
    ];

    
    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        const itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;

        menuItemDiv.appendChild(itemName);
        menuItemDiv.appendChild(itemPrice);
        menuList.appendChild(menuItemDiv);
    });

    menuDiv.appendChild(menuList);
    contentElement.appendChild(menuDiv);
}
