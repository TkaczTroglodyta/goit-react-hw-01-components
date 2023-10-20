import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistoryTbl}>
    <thead className={css.headerRow}>
      <tr className={css.valueRow}>
        <th className={css.headerColumn}>Type</th>
        <th className={css.headerColumn}>Amount</th>
        <th className={css.headerColumn}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={css.valueRow}>
          <td className={css.transactionData}>{item.type}</td>
          <td className={css.transactionData}>{item.amount}</td>
          <td className={css.transactionData}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
