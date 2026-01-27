import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {

    formFields={}
    //each event will have a name property
    //we will destrcut the event object to get the name property
    //along with the value property
    changeHandler(event){
        //const{name,value}=event.target;//object destructuring concept
        //this.formFields[name]=value;
        this.formFields[event.target.name]=event.target.value;
        //This is what form fields become when the user types:
        /*formFields={
            FirstName:'test',
            LastName:'test',
            Title:'test',
            Email:'test',
            Phone:'test'
        }*/
    }

    createContact(){
        const recordInput={apiName:CONTACT_OBJECT.objectApiName,fields:this.formFields}
        createRecord(recordInput).then(result=>{
            this.showToast('Success',`Contact created with Id: ${result.id}`);
            this.formFields={};//to clear the form fields
            this.template.querySelector('form.createForm').reset();//to reset the form
        }).catch(error=>{
            this.showToast('Error',error.body.message,'error');
        })
    }

    showToast(title, message, variant){
       this.dispatchEvent(new ShowToastEvent({
           title,
           message,
           variant:variant?variant:'success'
       }));
    }
}