import React from 'react';

const TransactionFormInput = ({ name, value, onChange }) => (
  <div>
    <label className="form-label">
      {name.charAt(0).toUpperCase() + name.slice(1)}:
      {name !== 'type' ? (
        <input
          className="form-input"
          type={name === 'amount' ? 'number' : 'text'}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <select className="form-input" name="type" value={value} onChange={onChange}>
          <option value="income">Ingreso</option>
          <option value="expense">Gasto</option>
        </select>
      )}
    </label>
  </div>
);

export default TransactionFormInput;
