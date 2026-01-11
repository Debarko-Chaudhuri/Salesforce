import { LightningElement } from 'lwc';

export default class LifeCycleParent2 extends LightningElement {
    pName
    constructor(){
        super()
        console.log('I am Parent2 Constructor');
        this.pName='Debarko'
        console.log('pName Parent2 Constructor:'+this.pName);
    }
}