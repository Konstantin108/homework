'use strict';


class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'small size', price: 50, calorie: 20},
            {id: 2, title: 'big size', price: 100, calorie: 40}
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.calorie = product.calorie;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <h3>${this.title}</h3>
                    <p class="price">${this.price}</p>
                    <p class="calorie">${this.calorie} ккал</p>
                    <button class="by-btn">В корзину</button>
                </div>`;
    }
}

new ProductList();

class StuffingList {
    constructor(container = '.stuffings') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'С сыром', price: 10, calorie: 20},
            {id: 2, title: 'С салатом', price: 20, calorie: 5},
            {id: 3, title: 'С картофелем', price: 15, calorie: 10}
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let stuffing of this.goods) {
            const productObject = new StuffingElem(stuffing);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class StuffingElem {
    constructor(stuffing) {
        this.title = stuffing.title;
        this.price = stuffing.price;
        this.id = stuffing.id;
        this.calorie = stuffing.calorie;
    }

    render() {
        return `<div class="stuffing-item" data-id="${this.id}">
                    <h3>${this.title}</h3>
                    <p class="price">${this.price}</p>
                    <p class="calorie">${this.calorie} ккал</p>
                    <button class="by-btn">В корзину</button>
                </div>`;
    }
}

new StuffingList();

class ToppingList {
    constructor(container = '.toppings') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'приправы', price: 15, calorie: 0},
            {id: 2, title: 'майонез', price: 20, calorie: 5}
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let topping of this.goods) {
            const productObject = new ToppingElem(topping);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ToppingElem {
    constructor(topping) {
        this.title = topping.title;
        this.price = topping.price;
        this.id = topping.id;
        this.calorie = topping.calorie;
    }

    render() {
        return `<div class="topping-item" data-id="${this.id}">
                    <h3>${this.title}</h3>
                    <p class="price">${this.price}</p>
                    <p class="calorie">${this.calorie} ккал</p>
                    <button class="by-btn">В корзину</button>
                </div>`;
    }
}

new ToppingList();

let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

function handleClick(clickButtonEvent) {
    let cardNode = clickButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        price: cardNode.querySelector('.price'),
        calorie: cardNode.querySelector('.calorie')
    };

    const priceOfProduct = card.price.innerHTML;
    const calorieOfProduct = card.calorie.innerHTML;
    const allProductsPrice = [];
    const allProductsCalories = [];
    allProductsPrice.push(parseFloat(priceOfProduct));
    let sum = 0;

    function allProductsPriceResult(array) {

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    }

    allProductsPriceResult(allProductsPrice);
    const blockForSum = document.querySelector('.summ');
    blockForSum.insertAdjacentHTML('afterbegin', sum);


}