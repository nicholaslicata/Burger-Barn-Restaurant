/* Navbar */

const hamburgerBtn = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', function() {
    navLinksContainer.classList.toggle('nav-links-container-active');
})

navLinks.forEach(link => link.addEventListener('click', function() {
    if (navLinksContainer.classList.contains('nav-links-container-active')) {
        navLinksContainer.classList.remove('nav-links-container-active');
    } 
}))

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinksContainer.classList.remove('nav-links-container-active');
    }
})

/* Menu */

const menuItemsContainer = document.querySelector('.menu-items-container');
const menuButtons = document.querySelectorAll('.menu-button');

const menu = [
    {
        category: 'Burgers',
        title: 'All American Burger',
        description: ['American Cheese', 'Lettuce', 'Tomato', 'Pickles'],
        price: '$12.99'
    },
    {
        category: 'Burgers',
        title: 'BBQ Bacon Cheddar Burger',
        description: ['Cheddar Cheese,', 'Applewood Bacon', 'Crispy Onions', 'BBQ Sauce'],
        price: '$14.99'
    },
    {
        category: 'Burgers',
        title: 'Mushroom Swiss Burger',
        description: ['Swiss Cheese', 'Sauteed Mushrooms', 'Truffle Aioli'],
        price: '$14.99'
    },
    {
        category: 'Burgers',
        title: 'Breakfast Burger',
        description: ['Cheddar Cheese', 'Fried Egg', 'Hashbrowns', 'Applewood Bacon'],
        price: '$16.99'
    },
    {
        category: 'Fries',
        title: 'French Fries',
        description: 'Classic fried potatoes',
        price: '$3.50'
    },
    {
        category: 'Fries',
        title: 'Loaded Fries',
        description: 'Fries topped with cheddar cheese and bacon',
        price: '$5.00'
    },
    {
        category: 'Fries',
        title: 'Disco Fries',
        description: 'Fries topped with cheddar cheese and beef gravy',
        price: '$4.00',
    },
    {
        category: 'Fries',
        title: 'Pizza Fries',
        description: 'Fries topped with mozzarella cheese and tomato sauce',
        price: '$6.00'
    },
    {
        category: 'Shakes',
        title: 'Vanilla',
        price: '$8.99'
    },
    {
        category: 'Shakes',
        title: 'Chocolate',
        price: '$8.99',
    },
    {
        category: 'Shakes',
        title: 'Strawberry',
        price: '$8.99',
    },
    {
        category: 'Shakes',
        title: 'Orange Cream',
        price: '$8.99'
    }
]

function renderMenuItems(menuItems) {

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    menuItemsContainer.appendChild(itemContainer);

    const itemNameContainer = document.createElement('div');
    itemNameContainer.classList.add('item-name-container');
    itemContainer.appendChild(itemNameContainer);

    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = menuItems.title;
    itemNameContainer.appendChild(itemName);

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = menuItems.price;
    itemNameContainer.appendChild(itemPrice);

    const itemDescContainer = document.createElement('div');
    itemDescContainer.classList.add('item-desc-container');
    itemContainer.appendChild(itemDescContainer);

    const itemDesc = document.createElement('p');
    itemDesc.classList.add('item-desc');
    itemDesc.textContent = menuItems.description;
    itemDescContainer.appendChild(itemDesc);
}

menuButtons.forEach(button => button.addEventListener('click', function(e) {
    const menuCategories = menu.filter(menuItems => {
        if (e.target.textContent === menuItems.category) {
            return menuItems;
        }
    })
    menuItemsContainer.textContent = '';
    menuCategories.forEach(menuItem => renderMenuItems(menuItem));
}))

window.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = menu.filter(burgerItems => {
        if (burgerItems.category === 'Burgers') {
            return burgerItems;
        }
    })
    burgerMenu.forEach(burgerItem => renderMenuItems(burgerItem));
})


