export class Person {
  constructor(name, address) {
    (this.name = name), (this.address = address);
  }
}

export class AddressBook {
  constructor() {
    this.currentId = 0;
    this.people = {};
  }
  addPerson(person) {
    this.currentId++;
    this.people[this.currentId] = person;
  }
}
