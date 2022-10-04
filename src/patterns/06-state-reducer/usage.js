import { useState } from "react";
import { actionTypes, toggleReducer, useToggle } from "./pattern";

const ALLOWED_CLICKS = 5;

function Comp() {
  const [clicksSinceReset, setClicksSinceReset] = useState(0);
  const tooManyClicks = clicksSinceReset >= ALLOWED_CLICKS;

  const customReducer = (currentState, action) => {
    if (tooManyClicks && action.type === actionTypes.toggle) {
      return { ...toggleReducer(currentState, action), on: currentState.on };
    } else {
      return toggleReducer(currentState, action);
    }
  };

  const { on, toggle } = useToggle({
    reducer: customReducer,
  });

  return (
    <div>
      <div>
        <p>Max Clicks Threshold: {ALLOWED_CLICKS}</p>
        <p>Current Clicks: {Math.min(ALLOWED_CLICKS, clicksSinceReset)}</p>
      </div>
      <button
        onClick={() => {
          toggle();
          setClicksSinceReset((count) => count + 1);
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
      &nbsp;
      {tooManyClicks ? (
        <button onClick={() => setClicksSinceReset(0)}>Reset</button>
      ) : null}
    </div>
  );
}

export default Comp;
