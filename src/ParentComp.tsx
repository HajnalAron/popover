import React, { useState } from "react";
import Popover from "./Popover";

export default function ParentComp() {
  // tracking the if the popover is open/closed
  const [isPopover, setPopover] = useState(false);
  // providing open/close functionality
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <Popover setPopover={setPopover} />
      ) : (
        <div style={{ color: "white" }}>No popover</div>
      )}
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Open/Close
      </button>
    </div>
  );
}
