public class AccountBatchWithIterator implements Database.Batchable<Account>{
    public Iterable<Account> start(Database.BatchableContext bc){
        System.debug('I am start');
        return new AccountIterable();
    }
    public void execute(Database.BatchableContext bc,List<Account> scope){
        System.debug('Total Accounts processed: '+scope.size());
        System.debug('I am execute');
    }
    public void finish(Database.BatchableContext bc){
        System.debug('I am finish');
    }
}