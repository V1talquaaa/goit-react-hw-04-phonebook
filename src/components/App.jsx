import { Component } from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    if(localStorage.getItem('contact'))
    // localStorage.setItem('contact', JSON.stringify(this.state.contacts))
    this.setState({contacts: JSON.parse(localStorage.getItem('contact'))})
  }

  componentDidUpdate(_, prevState) {
    if(prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts))
    
    }

  }

  onSubmitContact = ({name, number}) => {
   
    this.createContact({
      name:name,
      number:number,
   
    })
    this.reset();
  }


  createContact = (data) => {
   const newUser = {
    ...data,
    id: nanoid()
   }
   if (this.state.contacts.find(contact => contact.name.toLowerCase() === newUser.name.toLowerCase())) {
    alert('This contact already exist')
    return
   }

    this.setState((prevState) => ({contacts: [...prevState.contacts, newUser]}))
  }

  handleNameInput = ({target}) => {
    this.onChange(target.value)
  }

  onChange = (query) => {
    this.setState({filter: query})
  }


  getContactBySearch = () => {
    const normalizedFilter = this.state.filter.toLowerCase()

    const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return filteredContact
  }

  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }

  reset = () => {
    this.setState({
      name: "",
      number: "",
    })
  }

  render() {
  return (
  <>
  <h2>Phonebook</h2>
  <Form onSubmitContact={this.onSubmitContact} />
  <h2>Contacts</h2>
  <Filter handleNameInput={this.handleNameInput}/>
  <ContactList contacts={this.getContactBySearch()} handleDelete={this.handleDelete}/>

</>
  )
}
};

