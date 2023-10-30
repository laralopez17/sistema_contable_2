import React, { Component } from 'react';
import TransactionForm from '../components/TransactionForm';
import Dashboard from '../components/Dashboard';
import TransactionList from '../components/TransactionList';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import "../styles/HomePage.css";



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      income: 0,
      expenses: 0,
      transactions: [],
    };
  }

  // Método para agregar una transacción al estado
  addTransaction = (transaction) => {
    this.setState((prevState) => {
      const updatedTransactions = [...prevState.transactions, transaction];
      const amount = parseFloat(transaction.amount); // Convierte el valor a número
      const balance = prevState.balance + amount;
      const income = transaction.type === 'income' ? prevState.income + amount : prevState.income;
      const expenses = transaction.type === 'expense' ? prevState.expenses + amount : prevState.expenses;
  
      return {
        transactions: updatedTransactions,
        balance,
        income,
        expenses,
      };
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 className='header-inicio'>Inicio</h1>
        <div className='main-page'>
          <div className='main-page'>
              
              <h1>Dashboard</h1>
              <Dashboard
                  balance={this.state.balance}
                  income={this.state.income}
                  expenses={this.state.expenses}
              />

          <TransactionList transactions={this.state.transactions} />

          <div>
            <h2>Agregar Transacción</h2>
            <Button
                label="Agregar Ingreso/Gasto"
                onClick={() => this.setState({ isTransactionFormOpen: true })}
              />
          </div>
          {this.state.isTransactionFormOpen && (
            <TransactionForm onAddTransaction={this.addTransaction} />

          )}

        </div>
        </div>
        </div>
      
    );
  }
};

export default HomePage;
