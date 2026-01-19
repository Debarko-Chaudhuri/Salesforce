public class OpportunityHelper {
	public static void updateAverage(Set<id> accIds){
        if (accIds.isEmpty()) return;
        Map<Id,Decimal> accToAvgOppMap=new Map<Id,Decimal>();
        List<AggregateResult> agr=[SELECT accountId,AVG(Amount)average
                                   	FROM Opportunity
                                   	WHERE accountId IN:accIds
                                   	GROUP BY accountId];
        for(AggregateResult ag:agr){
            accToAvgOppMap.put((Id)ag.get('accountId'),(Decimal)ag.get('average'));
        }
        List<Account> accToUpdate= new List<Account>();
        for(Account acc:[SELECT Id,Average_Of_All_Opps__c
                         FROM Account
                         WHERE Id IN:accIds]){
                             if(accToAvgOppMap.containsKey(acc.Id)){
                                 acc.Average_Of_All_Opps__c=accToAvgOppMap.get(acc.Id);
                                 accToUpdate.add(acc);
                             }
        }
        Update accToUpdate;
    }
    public static void preventOpp(Set<Id>accIds,Map<Id,Opportunity>accIdToOppMap){
        for(Account acc:[SELECT Id,BillingAddress FROM Account WHERE Id IN:accIds]){
			if(acc.BillingAddress==null && 
				accIdToOppMap.containsKey(acc.Id)){
				accIdToOppMap.get(acc.Id).addError('The related account must have a billing address before opportunity can be created');
			}
		}
    }
}