class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, img: 'notebook.jpg', title: 'Notebook', price: 2000 },
            { id: 2, img: 'mouse.jpg', title: 'Mouse', price: 20 },
            { id: 3, img: 'keyboard.jpg', title: 'Keyboard', price: 200 },
            { id: 4, img: 'gamepad.jpg', title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class Cart extends ProductsList {
    constructor(goods, contain = '.cart-block') {
        super(goods);
        this.contain = contain;        
        this.shown = false;
        this.sum  = 0;        
    }
    render() {

    }
    addProduct() {
        
    }

    removeProduct() {

    }
    checkTotal () {
        let s = 0               

        this.goods.forEach (item => {
            s += item.price
        })
        this.sum = s 
        console.log(this.sum)       
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item data-id="${this.id}" >
        <img src="img/${this.img}" alt="${this.title}" width="180" height="130">        
        <div class="desc">
        <h3>${this.title}</h3>
        <p>${this.price} $</p>
        <button class="buy-btn">Добавить</button>
        </div>
    </div>`
    }
}
let list = new ProductsList();
list.render();
let cart = new Cart();
cart.checkTotal();


