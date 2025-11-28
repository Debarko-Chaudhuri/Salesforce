import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
const coloumn=[
    {label: 'Account Id', fieldName : 'Id'},
    {label: 'Account Name', fieldName : 'Name'},
    {label: 'Account Type', fieldName : 'Type'},
    {label: 'Account Industry', fieldName : 'Industry'}
]

export default class AccountDataTable extends LightningElement {
    accountInfo
    coloumn=coloumn
    @wire(getAccountList)
    accList

    connectedCallback(){
        getAccountList()
        .then((result)=>{
            this.accountInfo=result
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}