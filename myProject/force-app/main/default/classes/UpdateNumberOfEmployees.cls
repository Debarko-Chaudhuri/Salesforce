public class UpdateNumberOfEmployees implements Database.Batchable<sObject>,Schedulable {
    //start to get the data
    //We use Database.QueryLocator to fetch upto 50mil records
     public Database.QueryLocator start(Database.BatchableContext bc){
     String query='SELECT Id,NumberOfEmployees'+
                  ' FROM Account'+
                  ' WHERE NumberOfEmployees=null';
     return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext bc, List<Account> scope){
     for(Account a:scope){
         a.NumberOfEmployees=1000;
     }
     Database.update(scope,true);
    }
    public void finish(Database.BatchableContext bc){
        System.Debug('UpdateNumberOfEmployees Batch Job executed');
        updateAccountSLABatch bJob = new updateAccountSLABatch();
        Database.executeBatch(bJob,200);
    }
    public void execute(SchedulableContext sc){
        UpdateNumberOfEmployees bJob=new UpdateNumberOfEmployees();
        Database.executeBatch(bJob,2);
    }
 }