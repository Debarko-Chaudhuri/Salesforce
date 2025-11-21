import { LightningElement } from 'lwc';
import singninTemplate from'./singninTemplate.html'
import singnupTemplate from './singnupTemplate.html'
import renderMethodComponent from './renderMethodComponent.html'
export default class RenderMethodComponent extends LightningElement {
    selectedBtn=''
    render(){
        return this.selectedBtn==='SignUp'?singnupTemplate:
        this.selectedBtn==='SignIn'?singninTemplate:
        renderMethodComponent
    }

    handleClick(event){
        this.selectedBtn=event.target.label
    }
}