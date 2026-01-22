import { LightningElement,wire } from 'lwc';
import { getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo
    /*objectInfo({data,error}){
         if(data){
             console.log(data);
             this.defaultRecordTypeId=data.defaultRecordTypeId
         }
         if(error){
             console.log(error);
         }
     }*/
     //objectInfos
     objectApis=[ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
     @wire(getObjectInfos,{objectApiNames:'$objectApis'})
     objectInfos
     /*objectInfosHandler({data}){
         if(data){
             console.log(data);
             this.objectInfos=data
         }
     }*/
}