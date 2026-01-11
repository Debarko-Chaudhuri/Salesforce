global class AccountIterator implements Iterator<Account> {
    private List<Account> accList;
    private Integer currentIndex=0;
    public AccountIterator() {
        accList=[SELECT Id, Name FROM Account];
    }
    public Account next(){
        if(hasNext()){
            return accList[currentIndex++];
        }else {
            throw new NoSuchElementException('Iterator has no more elements.');
        }
    }
    public boolean hasNext(){
        return currentIndex < accList.size();
    }
}