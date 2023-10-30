import React from 'react';

const FinancialSummary = ({ balance, income, expenses }) => {
  return (
    <div className="summary">
      <h2>Resumen Financiero</h2>
      <p>Saldo: ${balance}</p>
      <p>Ingresos: ${income}</p>
      <p>Gastos: ${expenses}</p>
    </div>
  );
};

export default FinancialSummary;
