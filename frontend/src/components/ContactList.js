import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => {
  
  const handleDelete = async (id) => {
    if (window.confirm('Delete?')) {
      await fetch(`${process.env.REACT_APP_API_URL || ''}/api/contacts/${id}`, { method: 'DELETE' });
      onDelete(id);
    }
  };

  if (!contacts.length) return <div className="list-box"><p>No contacts yet </p></div>;

  return (
    <div className="list-box">
      <h2>Contacts ({contacts.length})</h2>
      <div className="contacts">
        {contacts.map(c => (
          <div key={c._id} className="card">
            <h3>{c.name}</h3>
            <p>{c.email}</p>
            <p>{c.phone}</p>
            {c.message && <p>{c.message}</p>}
            <button onClick={() => handleDelete(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
