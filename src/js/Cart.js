import Component from "./Components";
import CartState from './State'

export class Cart extends Component {
    constructor() {
        super('template-cart-list', 'app-cart-list');
        this.Total = new Total();
        this.render();
        this.event();
    }

    render() {
        // console.log(CartState.cartObject);
        this.root.innerHTML = '';
        CartState.cartObject.forEach(product => {
            const { id, name, price, qty } = product
            this.template.querySelector('.text-id').textContent = id
            this.template.querySelector('.text-name').textContent = name
            this.template.querySelector('.btn-minus').dataset.id = id
            this.template.querySelector('.btn-plus').dataset.id = id
            this.template.querySelector('.text-qty').textContent = qty
            this.template.querySelector('.text-total').textContent = price * qty
            const clone = this.template.cloneNode(true)
            this.fragment.appendChild(clone)
        })
        this.root.appendChild(this.fragment);
        this.Total.render();
        CartState.saveLocalStorage();
    }

    event(){
        this.root.addEventListener('click', (e)=>{
            if(e.target.classList.contains('btn-plus')){
                const id = e.target.dataset.id;
                CartState.increment(id);
                this.render();
            }
            if (e.target.classList.contains('btn-minus')) {
                const id = e.target.dataset.id
                CartState.decrement(id);
                this.render();
            }
        })
    }
}

export class Total extends Component {
    constructor(){
        super('template-cart-total', 'app-cart-total');
        this.render();
    }

    render(){
        this.root.innerHTML = '';
        const [qtyTotal, total] = CartState.total();
        this.template.querySelector('.text-qty').textContent = qtyTotal;
        this.template.querySelector('.text-total').textContent = total;
        const clone = this.template.cloneNode(true);
        this.fragment.appendChild(clone)
        this.root.appendChild(this.fragment)
    }
}