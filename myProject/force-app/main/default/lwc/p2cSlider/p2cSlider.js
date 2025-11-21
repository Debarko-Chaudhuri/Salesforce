import { LightningElement,api } from 'lwc';

export default class P2cSlider extends LightningElement {
    val=20
    changeHandler(event){
        this.val=event.target.value
    }
//public method
  @api  resetSlider(){
        this.val=50
    }
}