export class Person {
  constructor(name, address) {
    (this.name = name), (this.address = address);
  }
}

export function AddressBook() {
  this.currentId = 0;
  this.people = {};
}

AddressBook.prototype.addPerson = function (person) {
  this.currentId++;
  this.people[this.currentId] = person;
};
