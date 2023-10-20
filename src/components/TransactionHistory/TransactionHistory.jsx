import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Invoice</td>
        <td>125</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
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
