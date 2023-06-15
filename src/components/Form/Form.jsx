import { nanoid } from 'nanoid';
import { Component } from 'react';
import './Form.module.css'
import PropTypes from 'prop-types';


class Form extends Component {

  state = {
    name: "",
    number: "",
  }

  onChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  }

onSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmitContact({name:this.state.name, number:this.state.number})
  this.setState({name: '', number: ''})
}
  
  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <label htmlFor={nanoid()}>Name</label>
        <input
          type="text"
          id={nanoid()}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onChange}
          value={this.state.name}
        />
        <label htmlFor={nanoid()}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onChange}
          value={this.state.number}
        />
  
        <button type='submit'>
          Add contact
        </button>
      </form>
    );
  };
  
}

Form.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
}

export { Form };



