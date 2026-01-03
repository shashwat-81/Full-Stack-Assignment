import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Get contacts when app loads
    fetch(`${process.env.REACT_APP_API_URL || ''}/api/contacts`)
      .then(res => res.json())
      .then(data => setContacts(data.data || []))
      .catch(err => console.log(err));
  }, []);

  const addContact = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c._id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Contact Manager</h1>
      </header>
      
      <div className="container">
        <ContactForm onAdd={addContact} />
        <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
    </div>
  );
}

export default App;
