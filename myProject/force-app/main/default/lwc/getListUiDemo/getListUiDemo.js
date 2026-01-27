import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE from '@salesforce/schema/Contact.Title'
export default class GetListUiDemo extends LightningElement {
    contacts
    pageToken=null
    previousPageToken=null
    nextPageToken=null
    @wire(getListUi,{
        objectApiName:CONTACT_OBJECT, 
        listViewApiName:'AllContacts',
        sortBy:TITLE,
        pageSize:10,
        pageToken:'$pageToken'})
    contactList({data,error}){
        if(data){
            console.log(data);
            this.contacts=data.records.records;
            this.previousPageToken=data.records.previousPageToken;
            this.nextPageToken=data.records.nextPageToken;
        }
        if(error){
            console.log(error);
        }
    }
    handlePrevious(){
        this.pageToken=this.previousPageToken;
    }
    handleNext(){
        this.pageToken=this.nextPageToken;
    }
} 