import { LightningElement } from 'lwc';

export default class C2pModal extends LightningElement {

    okHandler(){
        const okClickEvent = new CustomEvent('ok',{
            detail:{
                msg:"Modal Closed"
            }
        })
        this.dispatchEvent(okClickEvent)
    }
}