import React, { Component } from 'react';
import TransactionForm from './TransactionForm';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import TransactionList from './TransactionList';
import Button from './Button';
import '../styles/MainPage.css'; // Importa el archivo de estilos

class MainPage extends Component {
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
      <div className='main-page'>
        <div className='main-page'>
            <Navbar />
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
    );
  }
}

export default MainPage;
