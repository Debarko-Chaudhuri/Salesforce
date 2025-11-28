import { LightningElement,api } from 'lwc';

export default class RevenueRow extends LightningElement {
    @api account
    constructor(){
        super()
        console.log('Child constructor');
    }

    connectedCallback(){
        console.log('Child connectedCallback');
    }

    renderedCallback(){
        console.log('Child renderedCallback');
    }

    disconnectedCallback(){
        console.log('Child disconnectedCallback');
    }
    
    errorCallback(error,stack){
        console.log('Child errorCallback',error,stack);
    }
}