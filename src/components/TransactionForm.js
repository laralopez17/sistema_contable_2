import React, { Component } from 'react';
import TransactionFormInput from './TransactionFormInput';
import Button from './Button';
import '../styles/TransactionForm.css';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'income',
      description: '',
      amount: 0,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const transaction = { ...this.state };
    this.props.onAddTransaction(transaction);
  }

  render() {
    return (
      <div className="form-container">
        <h2>Agregar Ingreso/Gasto</h2>
        <form onSubmit={this.handleSubmit}>
          <TransactionFormInput
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <TransactionFormInput
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <TransactionFormInput
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <Button label="Agregar" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default TransactionForm;
