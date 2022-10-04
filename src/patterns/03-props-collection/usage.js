import Toggler, { useToggle } from "./pattern";

function Comp() {
  const { togglerProps } = useToggle();

  return <Toggler {...togglerProps} />;
}

export default Comp;
