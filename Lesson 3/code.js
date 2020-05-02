'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//переделать на promise
let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('error');
            } else {
                cb(xhr.responseText);
            }
        }
    };
    xhr.send();
};

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        // this._fetchProducts();
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this._render();
            });
    }

    // _fetchProducts() {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         this._render();
    //     });
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }

    // _calcSum() {
    //     return this.goods.reduce((sum, good) => sum + good.price, 0);
    // }

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


