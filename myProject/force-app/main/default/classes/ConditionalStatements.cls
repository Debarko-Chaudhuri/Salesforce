public class ConditionalStatements {
	static integer a= 10;
    public static void checkOddEven(){
        //if else
        if(Math.mod(a,2)==0){
        System.debug('a is even');
        }else{
            System.debug('a is odd');
        }
        
        //Switch
        Switch on Math.Mod(a,2){
            When 0{
                System.debug('a is even');
            }
            When else{
                System.debug('a is odd');
            }
        }
        
        //terary
        String result=(Math.Mod(a,2)==0)? 'even': 'odd';
         System.debug('a is '+result);
    }
}