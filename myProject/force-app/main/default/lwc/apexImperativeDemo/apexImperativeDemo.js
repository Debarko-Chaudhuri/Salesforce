import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexImperativeDemo extends LightningElement {
     accountList
     handleClick(){
        getAccountList()
        .then((result)=>{
            this.accountList=result,
            this.error=undefined
        })
        .catch((error)=>{
            this.error=this.error,
            this.accountList=undefined
        })
     }
}