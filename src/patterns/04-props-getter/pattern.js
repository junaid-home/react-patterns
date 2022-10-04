import { useState } from "react";

export const useToggle = () => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => !prev);

  const callAll =
    (...fns) =>
    (...args) =>
      fns.forEach((fn) => fn && fn(...args));

  return {
    on,
    toggle,
    getTogglerProps: ({ onClick, ...restProps }) => {
      return {
        on,
        onClick: callAll(toggle, onClick),
        "aria-pressed": on,
        ...restProps,
      };
    },
  };
};

function Toggler({ on, ...props }) {
  return <button {...props}>{on ? "ON" : "OFF"}</button>;
}

export default Toggler;
