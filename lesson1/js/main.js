let catalog = {
    products : [
        {id: 1, img: 'notebook.jpg', title: 'Notebook', price: 2000},
        {id: 2, img: 'mouse.jpg', title: 'Mouse', price: 20},
        {id: 3, img: 'keyboard.jpg', title: 'Keyboard', price: 200},
        {id: 4, img: 'gamepad.jpg', title: 'Gamepad', price: 50},
    ],    
    init() {
        this._renderPage(this.products)
    },
    _renderProduct(id, img, title, price) {
        return `<div class="product-item data-id="${id}" >
        <img src="img/${img}" alt="${title}" width="180" height="130">        
        <div class="desc">
        <h3>${title}</h3>
        <p>${price} $</p>
        <button class="buy-btn">Добавить</button>
        </div>
    </div>`
    },
    _renderPage(list) {
        const productsList = list.map(item => this._renderProduct(item.id, item.img, item.title, item.price));       
        document.querySelector('.products').innerHTML = productsList.join('');;
    }

}

catalog.init();