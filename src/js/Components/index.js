export default class Component{
    constructor(templateId, rootId){
        this.template = document.querySelector(`#${templateId}`).content;
        this.root = document.querySelector(`#${rootId}`).content;
        this.fragment = document.createDocumentFragment();
    }

    render(){

    }

    event(){
        
    }
}