import { LightningElement,api } from 'lwc';
import CONTACT from '@salesforce/schema/Contact'//gotta fetch this else direct @objectInfoAPi not working
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
export default class ContactViewAndEditRecordForm extends LightningElement {
    @api recordId
    objectApi=CONTACT

    name=NAME_FIELD
    accId=ACCOUNTID_FIELD
    title=TITLE_FIELD
    email=EMAIL_FIELD
    phone=PHONE_FIELD
    
    editMode=false
    
    handleViewAndEdit(){
        this.editMode = !this.editMode
    }
}