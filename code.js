'use strict';

const products = [
    {id: 1, title: 'keyboard', price: 1000},
    {id: 2, title: 'monitor', price: 2600},
    {id: 3, title: 'mouse', price: 1500},
    {id: 4, title: 'gamepad', price: 1000}
];

const renderProduct = (title, price, img = 'img/oops.jpg') => {
    return `<div class="product-item">
                <img src="${img}" alt="oops-img" class="oops-img">
                <h3>${title}</h3>
                <p>&#36;${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    /**
     * способ наполнения массива при помощи метода .map
     */
    // const productList = list.map((good) => {
    //     return renderProduct(good.title, good.price)
    // });
    /**
     *
     * способ наполнения массива при помощи методов .forEach и .push
     */
    const productList = [];
    list.forEach((good) => {
        productList.push(renderProduct(good.title, good.price));
    });
    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);


