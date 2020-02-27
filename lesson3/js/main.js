const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

// let makeGETRequest = (url) => {
//     return fetch(url)
//         .then((response) => {
//             if (response.status !== 200) {
//                 console.log(`Возникла проблема. Ошибка:  + ${response.status}`);
//                 return;
//             }

//             response.json().then((data) => {
//                 console.log(data);
//             });
//         }
//         )
//         .catch((err) => {
//             console.log(err);
//         });
// }
// makeGETRequest(`${API}/catalogData.json`);

let makeGETRequest = (url) => {
    return new Promise((resolve, reject ) => {
        let xhr = new XMLHttpRequest();
    
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status !== 200){
                    reject(console.log('error')); 
                }else {                                      
                    resolve(xhr.responseText); 
                }
            }
 
               
        }
        xhr.send();
    });
}
makeGETRequest(`${API}/catalogData.json`);

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
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
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
// console.log(list.calcSum());


// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
//     {id: 5, title: 'Chair', price: 150},
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${product.title}</h3>
//                     <p>${product.price} $</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//     // document.createElement()
//
//     // for (let element of list){
//         // document.getElementById().innerHTML += element;
//         // document.getElementById().insertAdjacentHTML('beforeend', element);
//     // }
// };
//
// renderPage(products);

