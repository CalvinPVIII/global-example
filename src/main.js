//  import $ from 'jquery'; Uncomment when jquery is used
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { AddressBook, Person } from "./backend";

const handleSubmit = (addressBook) => {
  const name = document.getElementById("personName").value;
  const address = document.getElementById("address").value;
  const person = new Person(name, address);
  addressBook.addPerson(person);
};

const addToPage = (bookOfPeople) => {
  const div = document.createElement("div");
  Object.keys(bookOfPeople.people).forEach((personId) => {
    const h3 = document.createElement("h3");
    h3.innerText = `Name: ${bookOfPeople.people[personId].name}, Address: ${bookOfPeople.people[personId].address}`;
    div.append(h3);
  });

  document.getElementById("addressOutput").innerHTML = div.innerHTML;
};

window.addEventListener("load", () => {
  const book = new AddressBook();
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit(book);
    addToPage(book);
  });
});
