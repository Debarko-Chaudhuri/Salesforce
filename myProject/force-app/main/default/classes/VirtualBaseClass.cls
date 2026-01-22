public virtual class VirtualBaseClass {
    static Integer result;
    private static void add(Integer a,Integer b){
        result=a+b;
    }
    private static void printOP(){
        System.debug(result);
    }
    public void doMath(Integer a,Integer b){
        add(a,b);
        printOP();
    }
}