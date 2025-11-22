public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return[SELECT ID,Name,Type,Industry from Account LIMIT 5];
    }
}