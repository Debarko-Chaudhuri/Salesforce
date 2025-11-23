public class updateAccountSLABatch implements Database.Batchable<sObject>{
    
    public Database.QueryLocator start(Database.BatchableContext bc){
        String query='SELECT Id,NumberOfEmployees'+
                  ' FROM Account'+
                  ' WHERE SLA__c=null';
        return Database.getQueryLocator(query);
    }

    public void execute(Database.BatchableContext bc,List<Account> scope){
        for(Account acc: scope){
            acc.SLA__c='Platinum';
        }
        update scope;
    }

    public void finish(Database.BatchableContext bc){
        System.Debug('UpdateNumberOfEmployees Batch Job executed');
    }
}