trigger OpportunityTrigger on Opportunity (before insert,after insert, after update) {
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            OpportunityHandler.preventOppIfBillingAddressNotPresent(Trigger.new);
        }
	}
    if(Trigger.isAfter){
        if(Trigger.isInsert){
           OpportunityHandler.AverageOfOpps(Trigger.new);
        }
        if(Trigger.isUpdate){
            OpportunityHandler.AverageOfOpps(Trigger.new,Trigger.oldMap);
        }
    }
}