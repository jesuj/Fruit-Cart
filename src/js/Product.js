import { Cart } from "./Cart";
import Component from "./Components";
import Data from './Data'
import CartState from './State'

export class Product extends Component {
    constructor() {
        super('template-product', 'app-product');
        this.Cart = new Cart();
        this.event();
    }
    render() {
        Data.forEach(product => {
            const { id, name, url, price } = product;
            this.template.querySelector('img').src = url;
            this.template.querySelector('span').textContent = name;
            this.template.querySelector('strong').textContent = price;
            this.template.querySelector('button').dataset.id = id;
            const clone = this.template.cloneNode(true);
            this.fragment.appendChild(clone)
        })
        this.root.appendChild(this.fragment);
    }

    event() {
        document.addEventListener('DOMContentLoaded', () => {
            this.render();
            let redigirCarrito = document.querySelectorAll('#redigirCarrito')
            redigirCarrito.forEach(elemt =>{
                elemt.addEventListener('click', (e) => {
                    let carrito = document.querySelector('#app-cart-list')
                    carrito.scrollIntoView({ behavior: 'smooth' })
                })
            })
        })
        this.root.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-buy')) {
                this.createDataCart(e.target.parentNode);
                this.Cart.render();
            }
        })
    }
    createDataCart(node) {
        const id = node.querySelector('button').dataset.id
        const price = node.querySelector('strong').textContent
        const name = node.querySelector('span').textContent;

        const product = { id, price: +price, name, qty: 1 }
        CartState.add(product)
    }
}