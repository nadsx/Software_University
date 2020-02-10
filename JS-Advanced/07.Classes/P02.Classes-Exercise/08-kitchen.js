class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (const currentProduct of products) {
            let items = currentProduct.split(" ");
            let [productName, productQuantity, productPrice] = [items[0], Number(items[1]), Number(items[2])];

            if (this.budget - productPrice >= 0) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;

                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionsHistory.join("\n");
    }

    addToMenu(mealName, neededProducts, price) {
        if (this.menu.hasOwnProperty(mealName)) {
            return `The ${mealName} is already in our menu, try something different.`;
        }

        this.menu[mealName] = {
            products: neededProducts,
            price: Number(price)
        };

        return `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        let result = [];

        for (const key of Object.keys(this.menu)) {
            result.push(`${key} - $ ${this.menu[key].price}`);
        }

        if (result.length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        return result.join("\n") + "\n";
    }

    makeTheOrder(mealName) {
        if (!this.menu[mealName]) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        }

        let neededProducts = this.menu[mealName].products;

        for (const line of neededProducts) {
            let items = line.split(" ");
            let [productName, productQuantity] = [items[0], Number(items[1])];

            if (!this.productsInStock[productName] || this.productsInStock[productName] < productQuantity) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }

            this.productsInStock[productName] -= productQuantity;
        }

        this.budget += this.menu[mealName].price;
        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${this.menu[mealName].price}.`;
    }
}

let kitchen = new Kitchen(1000);

console.log(kitchen.loadProducts([
    'Banana 10 5',
    'Banana 20 10',
    'Strawberries 50 30',
    'Yogurt 10 10',
    'Yogurt 500 1500',
    'Honey 5 50'
]));

console.log(kitchen.addToMenu('frozenYogurt',
    ['Yogurt 1',
        'Honey 1',
        'Banana 1',
        'Strawberries 10'
    ],
    9.99));

console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log(kitchen.addToMenu('Pizza',
    ['Flour 0.5',
        'Oil 0.2',
        'Yeast 0.5',
        'Salt 0.1',
        'Sugar 0.1',
        'Tomato sauce 0.5',
        'Pepperoni 1',
        'Cheese 1.5'
    ],
    15.55));

console.log(kitchen.showTheMenu());