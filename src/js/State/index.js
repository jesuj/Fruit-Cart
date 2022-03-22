class State{
    cart = {}
    KEY = 'cart';
    
    static instance;

    static getInstance(){
        if (this.instance) {
            return this.instance;
        }
        this.instance = new State();
        return this.instance;
    }

    constructor(tipo){}
    
    add(){}
    increment(){}
    decrement(){}
    total(){}
    remove(){}
}

export default State.getInstance();