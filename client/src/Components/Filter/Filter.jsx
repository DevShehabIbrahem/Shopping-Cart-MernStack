import "../../css/Filter/Filter.css";
import { words } from "../../words";
const Filter = ({
  Proucts,
  handleSize,
  handleorder,

  order,
  Bysize,
  size,
}) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-title">
        <h2>Filter</h2>
      </div>

      <div className="filter-body">
        <p>Number of Proucts: {Proucts.length} products</p>
        <p>Number of Proucts By Size: {Bysize.length} products</p>
        <p>Number of Proucts By Size: {Bysize.length} products</p>

        <div className="filter-size">
          <p>Filter</p>

          <select value={size} onChange={handleSize}>
            {words.filter.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-order">
          <p>Order</p>

          <select value={order} onChange={handleorder}>
            {words.order.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
