import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TransactionsPage from './Pages/TransactionsPage';
import ReportsPage from './Pages/ReportsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Define las rutas y qué componente se mostrará en cada una */}
          <Route path="/" element={<HomePage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
