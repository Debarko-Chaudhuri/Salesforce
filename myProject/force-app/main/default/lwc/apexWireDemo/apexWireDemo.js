import { LightningElement,wire } from 'lwc';
import getAccountList from'@salesforce/apex/AccountController.getAccountList'
export default class ApexWireDemo extends LightningElement {
    accountList

    @wire(getAccountList)//nothing is passed in {} as the method does not have any params
    accounts

    @wire(getAccountList)
    getAccounts({data,error}){
        if(data){
            this.accountList=data.map(item=>{//transforming the data
                let newType=item.Type==='Customer - Direct'?'Direct':item.Type
                return{...item,newType}
            })
        }
        if(error){
            console.log(error);
        }
    }
}   