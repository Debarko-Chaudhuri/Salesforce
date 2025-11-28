import { LightningElement,wire } from 'lwc';
import getKPIsWire from'@salesforce/apex/KpiService.getKPIsWire'
import getKPIsImperative from'@salesforce/apex/KpiService.getKPIsImperative'
export default class RevenueGrid extends LightningElement {
    showRow=false;
    isLoading=false
    accountList
    constructor(){
        super()
        console.log('Parent constructor');
    }

    connectedCallback(){
        console.log('Parent connectedCallback');
    }

    renderedCallback(){
        console.log('Parent renderedCallback');
    }

    disconnectedCallback(){
        console.log('Parent disconnectedCallback');
    }

    errorCallback(error,stack){
        console.log('Parent errorCallback',error,stack);
    }
    handleClick(){
       this.showRow=!this.showRow
    }

    @wire(getKPIsWire)
    accounts

    fetchAccounts(){
        this.isLoading=true
        getKPIsImperative()
        .then((result)=>{
            this.accountList=result
            this.error=undefined
        })
        .catch((error)=>{
            this.error=error
            this.accountList=undefined
        })
        .finally(()=>{
            this.isLoading=false
        })
    }
}