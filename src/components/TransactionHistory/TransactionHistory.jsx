import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className="css.transactionHistoryTbl">
    <thead className={css.headerRow}>
      <tr className={css.valueRow}>
        <th className={css.headerColumn}>Type</th>
        <th className={css.headerColumn}>Amount</th>
        <th className={css.headerColumn}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.is} className={css.valueRow}>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
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
