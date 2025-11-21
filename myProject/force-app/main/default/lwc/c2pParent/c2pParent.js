import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {
    showModal=false
    modalClosed
    clickHandler(){
        this.showModal=true
    }
    okHandler(event){
        this.showModal=false
        this.modalClosed=event.detail.msg
    }
}