import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isVisible=false
    constructor(){
        super()
        console.log("Parent Called");
    }

    connectedCallback(){
        console.log("Parent connectedCallback called");
    }

    renderedCallback(){
        console.log("Parent renderedCallback called");
    }
    
    handleClick(){
        console.log('handleClick');
        this.isVisible=!this.isVisible
    }

    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack);
    }
}