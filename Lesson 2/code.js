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
            {id: 1, title: 'keyboard', price: 1000},
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
                    <p>&#36;${this.price}</p>
                    <button class="by-btn">Добавить в корзину</button>
                </div>`;
    }
}

new ProductList();


