class Item {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(quantity) {
        this.quantity = quantity;
    }

    calculateTotal() {
        return this.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.updateQuantity(existingItem.quantity + item.quantity);
        } else {
            this.items.push(item);
        }
        this.saveToLocalStorage();
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.saveToLocalStorage();
    }

    updateItemQuantity(name, quantity) {
        const item = this.items.find(i => i.name === name);
        if (item) {
            item.updateQuantity(quantity);
            this.saveToLocalStorage();
        }
    }

    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
    }

    applyDiscount(code) {
        const discount = code === 'DISCOUNT10' ? 0.1 : 0;
        const total = this.calculateTotalPrice();
        return total - (total * discount);
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    displayCart() {
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = '';
        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartDiv.appendChild(itemDiv);
        });
    }
}

const cart = new Cart();
const item1 = new Item('Apple', 2, 3);
const item2 = new Item('Banana', 1, 2);

cart.addItem(item1);
cart.addItem(item2);
cart.displayCart();

console.log(cart.calculateTotalPrice());
console.log(cart.applyDiscount('DISCOUNT10'));
