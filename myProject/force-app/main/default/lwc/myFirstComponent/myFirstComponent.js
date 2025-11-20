import { LightningElement,track } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    //Two way data binding
    name="Debarko"
    title="Sf Developer"
    changeHandler(event){
        this.title=event.target.value
    }

    //track
    @track address={
        city:"Kolkata",
        zip:700075,
        country:"India"
    }
    trackHandler(event){
        this.address.city=event.target.value
        //Use spread operator for good practice then no need to use track:
        //this.address={...this.address,"city":event.target.value}
    }

    //Getter
    nums=[1,2,3]
    get numbers(){
        return this.nums[0]
    }
    get multiply(){
        return this.nums[0]*this.nums[1]*this.nums[2]
    }

}