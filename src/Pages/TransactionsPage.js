import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import TransactionForm from '../components/TransactionForm';
import Dashboard from '../components/Dashboard';
import TransactionList from '../components/TransactionList';
import '../styles/TransactionsPage.css'; // Importa el archivo CSS

class TransactionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [], // Asegúrate de inicializar esta propiedad con datos reales
      activeComponent: 'dashboard', // Componente activo por defecto
    };
  }

  // Función para cambiar el componente activo
  setActiveComponent = (componentName) => {
    this.setState({ activeComponent: componentName });
  };

  render() {
    const { transactions, activeComponent } = this.state;

    return (
      <div>
        <Navbar />
        <h1>Transacciones</h1>
        {/* Agrega un menú de opciones internas */}
        <div className="button-container">
          <button
            className={activeComponent === 'dashboard' ? 'button active-component' : 'button'}
            onClick={() => this.setActiveComponent('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={activeComponent === 'transactionList' ? 'button active-component' : 'button'}
            onClick={() => this.setActiveComponent('transactionList')}
          >
            Transaction List
          </button>
          <button
            className={activeComponent === 'transactionForm' ? 'button active-component' : 'button'}
            onClick={() => this.setActiveComponent('transactionForm')}
          >
            Transaction Form
          </button>
        </div>
        {/* Renderiza el componente activo según el estado */}
        {activeComponent === 'dashboard' && <Dashboard transactions={transactions} />}
        {activeComponent === 'transactionList' && <TransactionList transactions={transactions} />}
        {activeComponent === 'transactionForm' && <TransactionForm />}
      </div>
    );
  }
}

export default TransactionsPage;
