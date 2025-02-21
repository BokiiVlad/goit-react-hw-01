import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.main}>
      <thead>
        <tr>
          <th className={css.cellb}>Type</th>
          <th className={css.cellb}>Amount</th>
          <th className={css.cellb}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={`${css.cell} ${css.typeString}`}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
