import Toggler, { useToggle } from "./pattern";

function Comp() {
  const { on, getTogglerProps } = useToggle();

  return (
    <Toggler
      {...getTogglerProps({
        disabled: on,
        onClick: () => console.log("Clicked!!!"),
      })}
    />
  );
}

export default Comp;
