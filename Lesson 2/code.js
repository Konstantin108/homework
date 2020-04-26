'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.allProductsPrice = [];
        this._fetchProducts();
        this._render();
        this._summ();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'keyboard', price: 1200},
            {id: 2, title: 'monitor', price: 2600},
            {id: 3, title: 'mouse', price: 1500},
            {id: 4, title: 'gamepad', price: 1000}
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

    _summ() {
        const blockForSum = document.querySelector('.summ');

        for (let product of this.goods) {
            const productPrice = product.price;
            this.allProductsPrice.push(productPrice);
        }

        const allProductsPriceResult = this.allProductsPrice.reduce(function (a, b) {
            return a + b;
        })

        blockForSum.insertAdjacentHTML('afterbegin', `Сумма: ${allProductsPriceResult}&#36`);
    }
}

class ProductItem {
    constructor(product, img = 'img/oops.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="oops-img" class="oops-img">
                    <h3>${this.title}</h3>
                    <p>${this.price}&#36</p>
                    <button class="by-btn">Купить</button>
                </div>`;
    }
}

new ProductList();

class Cart {
    constructor(container = '.cart') {
        this.container = container;
        this.Products = [];
        this.render();
        this.summ();
        this.delete();
    }
}

class ElementInCart {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }

    render() {
        return `<div class="cart-element" data-id="${this.id}">
                    <h3>${this.title}</h3>
                    <p>${this.price}&#36</p>
                </div>`;
    }
}


