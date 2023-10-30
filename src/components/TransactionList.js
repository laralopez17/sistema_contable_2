import "../styles/TransactionList.css";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Últimas Transacciones</h2>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;

