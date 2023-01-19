// src/App.js
import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";


function App() {
  
  const selectedContacts = contactsData.slice(0, 6);
  
  const [contacts, setContacts] = useState(selectedContacts);

  function handleRandomContact() {
    const randomNumber = Math.floor(Math.random() * (52 - 6) + 6);
    const newContact = contactsData[randomNumber];
    setContacts([...contacts, newContact])
}
  function sortByPopularity() {
    const newArray = [...contacts]

    newArray.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts(newArray);
}

  function sortByName() {
    const newArray = [...contacts]

    newArray.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContacts(newArray);
}

  function deleteContact(contactName) {
    const filteredContacts = contacts.filter((contact) => {
            return contact.name !== contactName;
        });
    setContacts(filteredContacts);
}

return (<div className="App">


<h1>IronContacts</h1>

<button onClick={handleRandomContact}>Add Random Contact</button>
<button onClick={sortByPopularity}>Sort By Popularity</button>
<button onClick={sortByName}>Sort By Name</button>

<div className="main-container">
  {contacts.map((contact) => {
                      return (
                        <div className="contacts-container" key={contact.name}>
                        <table>
                          <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Won Oscar</th>
                            <th>Won Emmy</th>
                          </tr>
                            <tr>
                              <td><img src={contact.pictureUrl} /></td>
                              <td>{contact.name}</td>
                              <td>{contact.popularity.toFixed(2)}</td>
                              <td>{contact.wonOscar && "🏆"}</td>
                              <td>{contact.wonEmmy && "🏆"}</td>
                              <td>
                              <button onClick={() => deleteContact(contact.name)}>Delete Contact</button>
                              </td>
                            </tr>
                        </table>
                        </div>
                        );
                  })}
      </div>
  </div>);
}
export default App;