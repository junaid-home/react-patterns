import { useRef, useState } from "react";

function Counter({ initialCount = 0 }) {
  const { current: initialState } = useRef({ count: initialCount });
  const [state, setState] = useState({ count: initialCount });

  const increment = () => setState((s) => ({ count: s.count + 1 }));
  const reset = () => setState(initialState);

  return (
    <div>
      <button onClick={increment}>{state.count}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
