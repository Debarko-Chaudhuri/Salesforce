import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class GetPickListvaluesDemo extends LightningElement {
    selectedIndustry = '';
    industryOptions=[]

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
            if(data){
               // console.log(data);
                //using concept of shalow copy so the any changes get
                // reflected in the industryOptions quickly
                this.industryOptions=[...this.generatePicklistOptions(data)]
            }
            if(error){
                console.log(error);
            }
        }
    

    //data is the full object in console log you can see
    //values property is the array of picklist values which has many things
    //including label and value which I am picking up using map function
    generatePicklistOptions(data) {//important  
        return data.values.map(item=>({label: item.label, value:item.value}))
    }
    
    handleChange(event) {
        this.selectedIndustry = event.target.value;
    }
}