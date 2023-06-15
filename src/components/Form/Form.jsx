import { nanoid } from 'nanoid';
import { useState } from 'react';
import './Form.module.css'
import PropTypes from 'prop-types';


const Form = ({onSubmitContact}) => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


 const onChange = ({target: {name, value}}) => {
    if(name === 'name') {
      setName(value)
    } else if(name === 'number') {
      setNumber(value)
    }

  }

const onSubmit = (e) => {
  e.preventDefault();
  onSubmitContact({name:name, number:number})
  setName('')
  setNumber('')
}

    return (
      <form action="" onSubmit={onSubmit}>
        <label htmlFor={nanoid()}>Name</label>
        <input
          type="text"
          id={nanoid()}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={name}
        />
        <label htmlFor={nanoid()}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          value={number}
        />
  
        <button type='submit'>
          Add contact
        </button>
      </form>
    );
  };
  

Form.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
}

export { Form };




