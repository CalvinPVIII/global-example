import { Person, AddressBook } from "../src/backend";

describe("AddressBook", () => {
  let person;

  beforeEach(() => {
    person = new Person("Bill", "2nd");
  });

  test("should create AddressBook object with empty people and 0 id", () => {
    const book = new AddressBook();
    expect(book.currentId).toEqual(0);
    expect(book.people).toEqual({});
  });

  test("should add people to address book", () => {
    const book = new AddressBook();
    book.addPerson(person);
    expect(book.currentId).toEqual(1);
    expect(book.people).toEqual({ 1: person });
  });
});
