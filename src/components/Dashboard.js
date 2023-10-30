import React from 'react';
import '../styles/Dashboard.css';
import FinancialSummary from './FinancialSummary';

const Dashboard = ({ balance, income, expenses }) => {
  return (
    <div className="dashboard">
      <FinancialSummary
        balance={balance}
        income={income}
        expenses={expenses}
      />
    </div>
  );
}

export default Dashboard;
