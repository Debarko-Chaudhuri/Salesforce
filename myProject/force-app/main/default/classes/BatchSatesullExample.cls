global class BatchSatesullExample implements Database.Batchable<Sobject>,Database.Stateful{
    private integer number_of_Accounts=0;
    global Database.QueryLocator start(Database.BatchableContext bc){
        String query='SELECT ID FROM Account';
        System.debug('I am Start');
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext bc,List<Account> scope){
        System.debug('I am Execute');
        for (Account acc : scope) {
            number_of_Accounts=number_of_Accounts+1;
        }
    }
    global void finish(Database.BatchableContext bc){
        System.debug('I am Finish');
        System.debug('Number of Account Processed: '+number_of_Accounts);
    }
}