const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create contact
const createContact = async (req, res) => {
  try {
    console.log('Received:', req.body);
    const contact = await Contact.create(req.body);
    console.log('Created:', contact);
    res.json({ success: true, data: contact });
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete contact
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getContacts, createContact, deleteContact };
