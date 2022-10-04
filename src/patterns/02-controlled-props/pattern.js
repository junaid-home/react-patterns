import { useState } from "react";

function ViewsCountDisplay({ value: countProp, onIncrement }) {
  const [data, setData] = useState({ count: 0 });

  const handleIncrement = () => {
    if (isControlled) {
      onIncrement(countProp);
    } else {
      setData((prev) => ({ count: prev.count + 1 }));
    }
  };

  const isControlled = countProp !== undefined;

  return (
    <div>
      <span>{isControlled ? countProp.count : data.count} &nbsp;</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ViewsCountDisplay;
