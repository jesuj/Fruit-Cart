import Component from "./Components";
import Data from './Data'
import State from './State'

export class Product extends Component{
    constructor(){
        super('template-product', 'app-product');
        this.event();
    }
    render(){
        Data.forEach(product=>{
            const {id, name, url, price} = product;
            this.template.querySelector('img').src = url;
            this.template.querySelector('span').textContent = name;
            this.template.querySelector('strong').textContent = price;
            this.template.querySelector('button').dataset.id = id;
            const clone = this.template.cloneNode(true);
            this.fragment.appendChild(clone)
        })
        this.root.appendChild(this.fragment);
    }

    event(){
        document.addEventListener('DOMContentLoaded', ()=>{
            this.render();
        })
        this.root.addEventListener('click', function (e){
            if (e.target.classList.contains('btn-buy')) {
                console.log(e.target)
            }
        })
    }

}

