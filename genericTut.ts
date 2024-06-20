//generics ensure type safety without losing flexibility of working with different data types
//pass in <T> for generic
class StorageContainer<T> {
    private contents: T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }

}

const usernames = new StorageContainer<string>();
usernames.addItem("luka");
usernames.addItem("thao");
console.log(usernames.getItem(0));

const userages = new StorageContainer<number>();
userages.addItem(30);
userages.addItem(31);
console.log(userages.getItem(0));
