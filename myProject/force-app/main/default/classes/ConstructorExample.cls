public with sharing class ConstructorExample {
   
    public ConstructorExample() {
        Integer i =1+2;
        System.debug(i);
    }
    public ConstructorExample(Integer num) {
        Integer z =num+2;
        System.debug(z);
    }
    public static void demoMethod(){
        ConstructorExample a= new ConstructorExample(4);
    }
}