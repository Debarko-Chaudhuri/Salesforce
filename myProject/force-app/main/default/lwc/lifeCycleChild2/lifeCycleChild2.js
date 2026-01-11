import { LightningElement,api } from 'lwc';

export default class LifeCycleChild2 extends LightningElement {
    @api cName
    rendered=false
    makeBlue=false
    constructor(){
        super()
        console.log("Child Name in constructor:"+this.cName);//undefined as in constructor can not access child element yet
    }

    connectedCallback(){
        console.log("Child Name in ccb:"+this.cName);
    }

    handleClick() {
        console.log('blue');
        this.makeBlue = !this.makeBlue; 
    }

    renderedCallback() {
        console.log('Rendered callback fired, makeBlue =', this.makeBlue);
    
        const text = this.template.querySelector('.msg');
        console.log('Text element:', text);
    
        if (this.makeBlue) {
            text.style.color = 'blue';
        } else {
            text.style.color = 'black';
        }
    }
}