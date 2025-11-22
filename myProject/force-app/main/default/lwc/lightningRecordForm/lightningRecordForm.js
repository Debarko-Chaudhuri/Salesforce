import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class LightningRecordForm extends LightningElement {
    objectName=ACCOUNT_OBJECT
    fieldList=[NAME_FIELD, ANNUALREVENUE_FIELD, INDUSTRY_FIELD]

    successHandler(event){
       const toastEvent= new ShowToastEvent({
            title:"Account Created",
            message:"Record Id:"+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
}