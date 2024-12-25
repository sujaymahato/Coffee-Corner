// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


const menuItems = [
        
    { name: 'Espresso', category: 'coffee', description: 'A shot of pure coffee bliss.', price: 'रू 250', image: 'images-coffee/espresso.jpg' },
    { name: 'Americano', category: 'coffee', description: 'Rich espresso diluted with hot water.', price: 'रू 300', image: 'images-coffee/americano.jpg' },
    { name: 'Latte', category: 'coffee', description: 'Creamy coffee with a smooth texture.', price: 'रू 350', image: 'images-coffee/latte.jpg' },
    { name: 'Cappuccino', category: 'coffee', description: 'A balanced mix of espresso, steamed milk, and foam.', price: 'रू 300', image: 'images-coffee/cappuccino.jpg' },
    { name: 'Mocha', category: 'coffee', description: 'Decadent chocolate and coffee fusion.', price: 'रू 400', image: 'images-coffee/mocha.jpg' },
    { name: 'Flat White', category: 'coffee', description: 'A velvety texture with a strong coffee flavor.', price: 'रू 250', image: 'images-coffee/flat-white.jpg' },
    { name: 'Iced Coffee', category: 'coffee', description: 'Refreshing chilled coffee for warm days.', price: 'रू 300', image: 'images-coffee/iced-coffee.jpg' },
    { name: 'Café au Lait', category: 'coffee', description: 'Rich coffee topped with steamed milk.', price: 'रू 320', image: 'images-coffee/cafe.jpg' },
    { name: 'Cold Brew', category: 'coffee', description: 'Smooth coffee brewed slowly in cold water.', price: 'रू 350', image: 'images-coffee/cold-brew.jpg' },
    { name: 'Affogato', category: 'coffee', description: 'Espresso poured over a scoop of vanilla ice cream.', price: 'रू 500', image: 'images-coffee/affogato.jpg' },
    { name: 'Turkish Coffee', category: 'coffee', description: 'Strong coffee brewed in a unique pot.', price: 'रू 300', image: 'images-coffee/turkish-coffee.jpg' },
    { name: 'Irish Coffee', category: 'coffee', description: 'Coffee combined with Irish whiskey and cream.', price: 'रू 600', image: 'images-coffee/irish-coffee.jpg' },
    { name: 'Dalgona Coffee', category: 'coffee', description: 'Fluffy whipped coffee served over milk.', price: 'रू 350', image: 'images-coffee/dalgona.jpg' },
    { name: 'Nitro Coffee', category: 'coffee', description: 'Cold brew coffee infused with nitrogen for creaminess.', price: 'रू 450', image: 'images-coffee/nitro-coffee.jpg' },
   
    
        
    { name: 'Lemonade', category: 'drinks', description: 'A classic blend of lemon juice and sugar.', price: 'रू 300', image: 'images-drinks/lemonade.jpg' },
    { name: 'Iced Tea', category: 'drinks', description: 'Refreshing brewed tea served cold.', price: 'रू 300', image: 'images-drinks/iced-tea.jpg' },
    { name: 'Fruit Punch', category: 'drinks', description: 'A delightful mix of various fruits.', price: 'रू 400', image: 'images-drinks/fruit-punch.jpg' },
    { name: 'Mango Lassi', category: 'drinks', description: 'Creamy yogurt drink with mango flavor.', price: 'रू 350', image: 'images-drinks/mango-lassi.jpg' },
    { name: 'Green Tea', category: 'drinks', description: 'Healthier option with antioxidants.', price: 'रू 250', image: 'images-drinks/green-tea.jpg' },
    { name: 'Chocolate Milkshake', category: 'drinks', description: 'Rich and creamy chocolate drink.', price: 'रू 350', image: 'images-drinks/chocolate-milkshake.jpg' },
    { name: 'Strawberry Smoothie', category: 'drinks', description: 'Fruity smoothie made with fresh strawberries.', price: 'रू 400', image: 'images-drinks/strawberry-smoothie.jpg' },
    { name: 'Virgin Mojito', category: 'drinks', description: 'Refreshing mint and lime soda drink.', price: 'रू 350', image: 'images-drinks/virgin-mojito.jpg' },
    { name: 'Peach Iced Tea', category: 'drinks', description: 'Iced tea infused with peach flavor.', price: 'रू 300', image: 'images-drinks/peach-iced-tea.jpg' },
    { name: 'Pineapple Juice', category: 'drinks', description: 'Freshly squeezed pineapple juice.', price: 'रू 350', image: 'images-drinks/pineapple-juice.jpg' },
    { name: 'Coconut Water', category: 'drinks', description: 'Natural hydration from fresh coconuts.', price: 'रू 200', image: 'images-drinks/coconut-water.jpg' },
    { name: 'Sprite', category: 'drinks', description: 'Sprite.', price: 'रू 50', image: 'images-drinks/sprite.jpg' },
    { name: 'Coca Cola', category: 'drinks', description: 'Coca Cola.', price: 'रू 80', image: 'images-drinks/coca-cola.jpg' },
    { name: 'Water', category: 'drinks', description: 'Refreshing carbonated water.', price: 'रू 150', image: 'images-drinks/water.jpg' },
           
            
    { name: 'Cheeseburger', category: 'burger', description: 'Classic burger topped with melted cheese.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Cheeseburger' },
    { name: 'Veggie Burger', category: 'burger', description: 'A healthy burger with a flavorful veggie patty.', price: 'रू 550', image: 'https://via.placeholder.com/250x150?text=Veggie+Burger' },
    { name: 'Chicken Burger', category: 'burger', description: 'Grilled chicken patty with fresh toppings.', price: 'रू 650', image: 'https://via.placeholder.com/250x150?text=Chicken+Burger' },
    { name: 'BBQ Chicken Burger', category: 'burger', description: 'Chicken burger slathered with BBQ sauce.', price: 'रू 700', image: 'https://via.placeholder.com/250x150?text=BBQ+Chicken+Burger' },
    { name: 'Mushroom Burger', category: 'burger', description: 'Savory mushroom and cheese delight.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Mushroom+Burger' },
    { name: 'Spicy Chickpea Burger', category: 'burger', description: 'Chickpea patty with a spicy kick.', price: 'रू 500', image: 'https://via.placeholder.com/250x150?text=Spicy+Chickpea+Burger' },
    { name: 'Falafel Burger', category: 'burger', description: 'Crispy falafel patty with tahini sauce.', price: 'रू 550', image: 'https://via.placeholder.com/250x150?text=Falafel+Burger' },
    { name: 'Fish Burger', category: 'burger', description: 'Crispy fish fillet with tartar sauce.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Fish+Burger' },
    { name: 'Caprese Burger', category: 'burger', description: 'Mozzarella, basil, and tomato on a bun.', price: 'रू 650', image: 'https://via.placeholder.com/250x150?text=Caprese+Burger' },
    { name: 'Paneer Tikka Burger', category: 'burger', description: 'Grilled paneer with spices and veggies.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Paneer+Tikka+Burger' },           
    { name: 'Avocado Burger', category: 'burger', description: 'Creamy avocado spread on a delicious bun.', price: 'रू 700', image: 'https://via.placeholder.com/250x150?text=Avocado+Burger' },
    { name: 'Sweet Potato Burger', category: 'burger', description: 'Flavorful sweet potato patty with spices.', price: 'रू 550', image: 'https://via.placeholder.com/250x150?text=Sweet+Potato+Burger' },
    { name: 'Buffalo Cauliflower Burger', category: 'burger', description: 'Spicy buffalo cauliflower on a bun.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Buffalo+Cauliflower+Burger' },
    { name: 'Zucchini Burger', category: 'burger', description: 'Zucchini patty with fresh toppings.', price: 'रू 500', image: 'https://via.placeholder.com/250x150?text=Zucchini+Burger' },
    { name: 'BBQ Veggie Burger', category: 'burger', description: 'Grilled veggies with BBQ sauce on a bun.', price: 'रू 650', image: 'https://via.placeholder.com/250x150?text=BBQ+Veggie+Burger' },
       
    
    { name: 'Chocolate Croissant', category: 'pastries', description: 'Flaky pastry filled with rich chocolate.', price: 'रू 350', image: 'images-pastries/chocolate-croissant.jpg' },
    { name: 'Fruit Danish', category: 'pastries', description: 'Delicious pastry topped with fresh fruits.', price: 'रू 400', image: 'images-pastries/fruit-danish.jpg' },
    { name: 'Almond Croissant', category: 'pastries', description: 'Buttery croissant filled with almond cream.', price: 'रू 300', image: 'images-pastries/almond-croissant.jpg' },
    { name: 'Strawberry Tart', category: 'pastries', description: 'Sweet tart filled with strawberries and cream.', price: 'रू 450', image: 'images-pastries/strawberry-tart.jpg' },
    { name: 'Carrot Cake', category: 'pastries', description: 'Moist cake made with grated carrots.', price: 'रू 400', image: 'images-pastries/carrot-cake.jpg' },
    { name: 'Pistachio Baklava', category: 'pastries', description: 'Rich pastry filled with nuts and honey.', price: 'रू 450', image: 'images-pastries/pistachio-baklava.jpg' },
    { name: 'Chocolate Croissant', category: 'pastries', description: 'Flaky pastry filled with rich chocolate.', price: 'रू 350', image: 'images-pastries/chocolate-croissant.jpg' },
    { name: 'Fruit Danish', category: 'pastries', description: 'Delicious pastry topped with fresh fruits.', price: 'रू 400', image: 'images-pastries/fruit-danish.jpg' },
    { name: 'Almond Croissant', category: 'pastries', description: 'Buttery croissant filled with almond cream.', price: 'रू 300', image: 'images-pastries/almond-croissant.jpg' },
    { name: 'Strawberry Tart', category: 'pastries', description: 'Sweet tart filled with strawberries and cream.', price: 'रू 450', image: 'images-pastries/strawberry-tart.jpg' },
    { name: 'Carrot Cake', category: 'pastries', description: 'Moist cake made with grated carrots.', price: 'रू 400', image: 'images-pastries/carrot-cake.jpg' },
    { name: 'Pistachio Baklava', category: 'pastries', description: 'Rich pastry filled with nuts and honey.', price: 'रू 450', image: 'images-pastries/pistachio-baklava.jpg' },
    { name: 'Chocolate Croissant', category: 'pastries', description: 'Flaky pastry filled with rich chocolate.', price: 'रू 350', image: 'images-pastries/chocolate-croissant.jpg' },
    { name: 'Fruit Danish', category: 'pastries', description: 'Delicious pastry topped with fresh fruits.', price: 'रू 400', image: 'images-pastries/fruit-danish.jpg' },
    { name: 'Almond Croissant', category: 'pastries', description: 'Buttery croissant filled with almond cream.', price: 'रू 300', image: 'images-pastries/almond-croissant.jpg' },
  
    
    { name: 'Turkish Coffee', category: 'specials', description: 'Strong coffee brewed in a unique pot.', price: 'रू 300', image: 'images-coffee/turkish-coffee.jpg' },
    { name: 'Dalgona Coffee', category: 'specials', description: 'Fluffy whipped coffee served over milk.', price: 'रू 350', image: 'images-coffee/dalgona.jpg' },
    { name: 'Nitro Coffee', category: 'specials', description: 'Cold brew coffee infused with nitrogen for creaminess.', price: 'रू 450', image: 'images-coffee/nitro-coffee.jpg' },
    { name: 'Cappuccino', category: 'specials', description: 'A balanced mix of espresso, steamed milk, and foam.', price: 'रू 300', image: 'images-coffee/cappuccino.jpg' },
    { name: 'Mango Lassi', category: 'specials', description: 'Creamy yogurt drink with mango flavor.', price: 'रू 350', image: 'images-drinks/mango-lassi.jpg' },
    { name: 'Chocolate Milkshake', category: 'specials', description: 'Rich and creamy chocolate drink.', price: 'रू 350', image: 'images-drinks/chocolate-milkshake.jpg' },
    { name: 'Strawberry Smoothie', category: 'specials', description: 'Fruity smoothie made with fresh strawberries.', price: 'रू 400', image: 'images-menu-drinks/strawberry-smoothie.jpg' },
    { name: 'Virgin Mojito', category: 'specials', description: 'Refreshing mint and lime soda drink.', price: 'रू 350', image: 'images-drinks/virgin-mojito.jpg' },
    { name: 'Cheeseburger', category: 'specials', description: 'Classic burger topped with melted cheese.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Cheeseburger' },
    { name: 'Veggie Burger', category: 'specials', description: 'A healthy burger with a flavorful veggie patty.', price: 'रू 550', image: 'https://via.placeholder.com/250x150?text=Veggie+Burger' },
    { name: 'Chicken Burger', category: 'specials', description: 'Grilled chicken patty with fresh toppings.', price: 'रू 650', image: 'https://via.placeholder.com/250x150?text=Chicken+Burger' },
    { name: 'BBQ Chicken Burger', category: 'specials', description: 'Chicken burger slathered with BBQ sauce.', price: 'रू 700', image: 'https://via.placeholder.com/250x150?text=BBQ+Chicken+Burger' },
    { name: 'Mushroom Burger', category: 'specials', description: 'Savory mushroom and cheese delight.', price: 'रू 600', image: 'https://via.placeholder.com/250x150?text=Mushroom+Burger' },
    { name: 'Hot Chocolate', category: 'specials', description: 'Rich and creamy chocolate drink.', price: 'रू 350', image: 'https://via.placeholder.com/250x150?text=Hot+Chocolate' },
    { name: 'Pistachio Baklava', category: 'specials', description: 'Rich pastry filled with nuts and honey.', price: 'रू 450', image: 'https://via.placeholder.com/250x150?text=Pistachio+Baklava' },
];


document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));

       
        button.classList.add('active');
    });
});




let basePrice;


const overlay = document.createElement('div');
overlay.className = 'modal-overlay';
document.body.appendChild(overlay);

function generateCards() {
const container = document.getElementById('menuContainer');
container.innerHTML = ''; 

menuItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.setAttribute('data-category', item.category);


    const rating = Math.random() < 0.5 ? 4 : 5;
    const stars = generateStars(rating);

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="rating">${stars}</div>
        <p><strong>Rs ${item.price}</strong></p>
        <button class="order-button" data-index="${index}">Order Now</button>
    `;
    
    container.appendChild(card); 
});


filterMenu('coffee');


document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', openModal);
});
}

function generateStars(rating) {
return Array.from({ length: 5 }, (_, i) => 
    `<span class="star ${i < rating ? 'filled' : ''}">★</span>`
).join('');
}

function filterMenu(category) {
document.querySelectorAll('.menu-item').forEach(item => {
    item.style.display = item.getAttribute('data-category') === category ? 'block' : 'none';
});
}

// Modal-related functions
function openModal(event) {
const index = event.target.getAttribute('data-index');
const item = menuItems[index];


document.getElementById("modalName").textContent = item.name;
document.getElementById("modalDescription").textContent = item.description;
basePrice = parseInt(item.price.replace("Rs ", ""));
document.getElementById("modalPrice").textContent = basePrice;


const modalContent = document.querySelector('.modal-content'); 
modalContent.style.backgroundImage = `url(${item.image})`;
modalContent.style.backgroundSize = 'cover';
modalContent.style.backgroundPosition = 'center';

document.getElementById("quantity").value = 1;
updateTotalPrice();


overlay.style.display = 'block';
const modal = document.getElementById("orderModal");
modal.style.display = 'block';
setTimeout(() => modal.classList.add('show'), 10);
}


function updateTotalPrice() {
const quantity = parseInt(document.getElementById('quantity').value);
document.getElementById('modalPrice').textContent = basePrice * quantity;
}


document.getElementById('quantity').addEventListener('input', updateTotalPrice);


function closeModal() {
const modal = document.getElementById("orderModal");
modal.classList.remove('show');
overlay.style.display = 'none';
setTimeout(() => modal.style.display = 'none', 300);
}


document.querySelector('.confirm-order-button').addEventListener('click', () => {
const quantity = document.getElementById('quantity').value;
const location = document.getElementById('location').value;
const payment = document.getElementById('payment').value;

if (!location) {
    alert("Please enter your location.");
    return;
}

console.log(`Order placed: ${quantity} item(s), Total: Rs ${basePrice * quantity}, Location: ${location}, Payment: ${payment}`);
closeModal();


const animationContainer = document.getElementById('animationContainer');
animationContainer.style.display = 'flex';
setTimeout(() => {
    animationContainer.style.display = 'none';
}, 4000);
});


document.addEventListener("DOMContentLoaded", () => {
generateCards();
document.querySelector(".close-button").addEventListener("click", closeModal);
window.onclick = function(event) {
    if (event.target === document.getElementById("orderModal")) {
        closeModal();
    }
};
overlay.addEventListener('click', closeModal);
});
