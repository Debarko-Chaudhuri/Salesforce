public with sharing class DataTypesInApex{
    public static void getOpportunityAndField(){
        List<Opportunity> Opportunity = new List<Opportunity>();
        Opportunity=[SELECT Id,Name,Amount FROM Opportunity WHERE Amount!=null LIMIT 1];
        Id oppId=Opportunity[0].Id;
        System.debug(oppId);
        String oppName=Opportunity[0].Name;
        System.debug(oppName);
        Decimal oppAmount=Opportunity[0].Amount;
        System.debug(oppAmount);
    }
}