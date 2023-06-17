import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export const App = () => {
  
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contact')) || [])
  const [filter, setFilter] = useState('')

useEffect(() => {
 localStorage.setItem('contact', JSON.stringify(contacts))
}, [contacts])


  const onSubmitContact = ({name, number}) => {
   
    createContact({
      name:name,
      number:number,
    })

  }

  const createContact = (data) => {
   const newUser = {
    ...data,
    id: nanoid()
   }
   if (contacts.find(contact => contact.name.toLowerCase() === newUser.name.toLowerCase())) {
    alert('This contact already exist')
    return
   }
   setContacts((prevState) => [...prevState, newUser])
  }

  const handleNameInput = ({target}) => {
    onChange(target.value)
  }

 const onChange = (query) => {
    setFilter(query)
  }


  const getContactBySearch = () => {
    const normalizedFilter = filter.toLowerCase()
    const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return filteredContact
  }

  const handleDelete = (id) => {
    setContacts((prevState)=> prevState.filter(contact => contact.id !== id))
  }

  return (
  <>
  <h2>Phonebook</h2>
  <Form onSubmitContact={onSubmitContact} />
  <h2>Contacts</h2>
  <Filter handleNameInput={handleNameInput}/>
  <ContactList contacts={getContactBySearch()} handleDelete={handleDelete}/>

</>
  )
};


