"use strict";
//generics ensure type safety without losing flexibility of working with different data types
//pass in <T> for generic
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("luka");
usernames.addItem("thao");
console.log(usernames.getItem(0));
const userages = new StorageContainer();
userages.addItem(30);
userages.addItem(31);
console.log(userages.getItem(0));
