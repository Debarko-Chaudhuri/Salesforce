import { LightningElement,wire } from 'lwc';
import { getRecord }from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
export default class WireDemoUserDetail extends LightningElement {
    userId=Id
    userDetail
   // User Detail Using Wire as function
    @wire(getRecord, {recordId:'$userId',fields:['User.Name','User.Email']}//$ to make it reactive so that it loads once the id is there else it will throw error
        )
    userdetailHandler({data,error}){
        if(data){
            this.userDetail=data.fields
        }
        if(error){
            console.log(error);
        }
    }
    //User Detail Using Wire as property
    @wire(getRecord, {recordId:'$userId',fields:['User.Name','User.Email']})
    userDetailProperty
}