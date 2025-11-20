import { LightningElement } from 'lwc';

export default class ConditionalRenderingPractice extends LightningElement {
    isVisible=false
    name
    handleClick(){
        this.isVisible=true
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get helloMehod(){
        return this.name==='hello'
    }
}