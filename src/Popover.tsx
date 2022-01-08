import React, { Dispatch, SetStateAction, useEffect } from "react";

interface PopoverProps {
  setPopover: Dispatch<SetStateAction<boolean>>;
}

export default function Popover(props: PopoverProps) {
  useEffect(() => {
    return () => {
      props.setPopover(false);
    };
  }, []);

  return <div style={{ color: "white" }}>Popover open</div>;
}
