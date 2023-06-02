import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [allContacts, setAllContacts] = useState([...contacts]);
  const [orderBy, setOrderBy] = useState('name')

  //const just5 = allContacts.slice(0,5)

  //console.log(just5)
  function handleClick(e){
    setOrderBy(e.target.id)
  }

  function handleDelete(id){
    console.log(id)
    const contactsFiltered = allContacts.filter(contacts => contacts.id !== id)
    setAllContacts(contactsFiltered)
  }
  
  let sortedFamous;
  if(orderBy === 'popularity'){
    sortedFamous = allContacts.sort((f1, f2) => f2.popularity - f1.popularity)

  }else if (orderBy === 'name'){
    sortedFamous = allContacts.sort((f1, f2) => f1.name.localeCompare(f2.name))
  }
  // }else if (orderBy === 'bothAwards'){
  //   sortedFamous = allContacts.filter(contact => contact.wonOscar & contact.wonEmmy)
  // }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="btn">
        <button id="name" onClick={handleClick}>Sort by name</button>
        <button id="popularity" onClick={handleClick}>Sort by popularity</button>
        {/* <button id="bothAwards" onClick={handleClick}>Someone won both awards?</button> */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {sortedFamous.map((contact) => (
          <tbody key={contact.id}>
            <tr>
              <td><img src={contact.pictureUrl} alt={`Picture of ${contact.name} `} style={{width: '100%' ,height: '130px'}}/></td>
              <td>{contact.name}</td>
              <td>{(contact.popularity).toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null }</td>
              <td>{contact.wonEmmy ? '⭐' : null}</td>
              <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
            </tr>
          </tbody>

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
