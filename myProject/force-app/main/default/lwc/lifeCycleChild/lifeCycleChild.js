import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        console.log("Child Called");
    }

    connectedCallback(){
        console.log("Child connectedCallback called");
        throw new Error('Loading of child failed')
    }

    renderedCallback(){
        console.log("Child renderedCallback called");
    }
    disconnectedCallback(){
        alert('Child disconnectedCallback called');
    }
}