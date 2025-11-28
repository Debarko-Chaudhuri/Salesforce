public class KpiService {
    @AuraEnabled(Cacheable=true)
    public static List<Account> getKPIsWire(){
        try {
            return [SELECT Id,Name,AnnualRevenue FROM Account WHERE AnnualRevenue!=null ORDER BY AnnualRevenue DESC LIMIT 3 ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Account> getKPIsImperative(){
        try {
            return [SELECT Id,Name,AnnualRevenue FROM Account WHERE AnnualRevenue!=null ORDER BY AnnualRevenue DESC LIMIT 3];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}