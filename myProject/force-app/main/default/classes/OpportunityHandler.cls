public class OpportunityHandler {
    public static void AverageOfOpps(List<Opportunity> oppList){
        Set <Id> accIds= new Set <Id>();
        for(Opportunity opp: oppList){
            if(opp.AccountId!=null){
                accIds.add(opp.AccountId);
            }
        }
        OpportunityHelper.updateAverage(accIds);
    }
    public static void AverageOfOpps(List<Opportunity> oppList,Map<Id,Opportunity> oldOppMap){
        Set <Id> accIds= new Set <Id>();
        for(Opportunity opp: oppList){
            if(opp.AccountId!=oldOppMap.get(opp.Id).AccountId||
               opp.Amount!=oldOppMap.get(opp.Id).Amount){
               accIds.Add(opp.AccountId);
               accIds.Add(oldOppMap.get(opp.Id).AccountId);
           }
        }
        OpportunityHelper.updateAverage(accIds);
    }
    public static void preventOppIfBillingAddressNotPresent(List<Opportunity> oppList){
        Set<Id> accIds=new Set<Id>();
		Map<Id,Opportunity> accIdToOppMap=new Map<Id,Opportunity>();
		for(Opportunity opp:oppList){
			if(opp.AccountId!=null){
				accIds.add(opp.AccountId);
				accIdToOppMap.put(opp.AccountId,opp);
			}
		}
        OpportunityHelper.preventOpp(accIds,accIdToOppMap);
    }
}