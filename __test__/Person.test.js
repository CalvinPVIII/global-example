import { Person } from "../src/backend";

describe("Person", () => {
  test("should create person object with name and address", () => {
    const person = new Person("Bob", "1st");
    expect(person.name).toEqual("Bob");
    expect(person.address).toEqual("1st");
  });
});
