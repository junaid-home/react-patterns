import { useState } from "react";

export const useToggle = () => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => !prev);

  return {
    on,
    toggle,
    togglerProps: {
      on,
      onClick: toggle,
      "aria-pressed": on,
    },
  };
};

function Toggler({ on, ...props }) {
  return <button {...props}>{on ? "ON" : "OFF"}</button>;
}

export default Toggler;
