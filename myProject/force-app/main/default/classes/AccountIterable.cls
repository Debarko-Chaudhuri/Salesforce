global class AccountIterable implements Iterable<Account> {
    public Iterator<Account> iterator() {
        return new AccountIterator();
    }
}