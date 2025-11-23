@isTest
public class UpdateNumberOfEmployeesTest{
    @TestSetup
    static void makeData(){
        List<Account> accList=new List<Account>();
        Account acc=new Account();
        acc.Name='ABC';
        acc.NumberOfEmployees=null;
        accList.add(acc);
        Account acc2=new Account();
        acc2.Name='ABCD';
        acc2.NumberOfEmployees=null;
        accList.add(acc2);
        insert accList;
    }
    @isTest
    public static void testBatch(){
        Test.startTest();
            Database.executeBatch(new UpdateNumberOfEmployees(),200);
        Test.stopTest();
        List<Account> accList=[SELECT ID FROM Account WHERE NumberOfEmployees=null];
        System.assertEquals(accList.Size(),0,'This should be 0');
    }
}