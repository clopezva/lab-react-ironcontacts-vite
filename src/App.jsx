import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [allContacts, setAllContacts] = useState([...contacts]);

  const just5 = allContacts.filter((contact, index) => index < 5)

  console.log(just5)

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {just5.map((contact) => (
          <tr>
            <td><img src={contact.pictureUrl} alt="" srcset="" style={{width: '100%' ,height: '130px'}}/></td>
            <td>{contact.name}</td>
            <td>{(contact.popularity).toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : null }</td>
            <td>{contact.wonEmmy ? '🏆' : null}</td>
          </tr>
        ))}
        {/* <tr>
          <td>{allContacts[0].name}</td>
          <td>Last name</td>
          <td>Popularity</td>
        </tr> */}
      </table>
    </div>
  );
}

export default App;
