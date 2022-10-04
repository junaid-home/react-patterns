import { Fragment, useState } from "react";
import ViewsCountDisplay from "./pattern";

function Comp() {
  const [global, setGlobal] = useState({ count: 0 });
  const [local, setLocal] = useState({ count: 0 });

  return (
    <Fragment>
      {/* Uncontrolled */}
      <ViewsCountDisplay /> <br />
      {/* controlled */}
      <ViewsCountDisplay
        value={local}
        onIncrement={() => setLocal((prev) => ({ count: prev.count + 1 }))}
      />
      <br />
      {/* controlled with global State */}
      <ViewsCountDisplay
        value={global}
        onIncrement={() => setGlobal((prev) => ({ count: prev.count + 1 }))}
      />
      <ViewsCountDisplay
        value={global}
        onIncrement={() => setGlobal((prev) => ({ count: prev.count + 1 }))}
      />
    </Fragment>
  );
}

export default Comp;
