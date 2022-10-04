import { useState } from "react";
import Counter from "./pattern";

function Comp() {
  const [initialCount, setInitialCount] = useState(10);

  return (
    <div>
      <Counter initialCount={initialCount} />
      <label htmlFor="initial">Initial Count Value: {initialCount}</label>
      <br />
      <input
        id="initial"
        value={initialCount}
        onChange={(e) => setInitialCount(e.target.value)}
      />
    </div>
  );
}

export default Comp;
