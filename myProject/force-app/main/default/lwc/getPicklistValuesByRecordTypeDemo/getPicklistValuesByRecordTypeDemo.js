import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_Object from '@salesforce/schema/Opportunity'
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    stageOptions=[];   
    selectedStage 
    typeOptions=[];   
    selectedType
    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_Object})
    objectInfo
    
    @wire(getPicklistValuesByRecordType,
    {objectApiName:OPPORTUNITY_Object,recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistValuesByRecordType({data,error}){
        if(data){
          //  console.log(data);
            this.stageOptions=[...this.picklistHandler(data.picklistFieldValues.StageName)]
            this.typeOptions=[...this.picklistHandler(data.picklistFieldValues.Type)]
        }
        if(error){
            console.log(error);
        }
    }
    picklistHandler(data){
        return data.values.map(item=>({"label": item.label, "value": item.value}))
    }
    handleChange(event){
        if(event.target.name === 'Stage'){
            this.selectedStage = event.target.value;
        }
        if(event.target.name === 'Type'){
            this.selectedType = event.target.value;
        }
    }
}