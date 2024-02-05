// import { useScrollTrigger } from '@mui/material'
import React, { useState } from "react";

const Button = () => {
  const [color, setColor] = useState(true);
  const colorchange = () => {
    setColor(!color);
  };
  return (
    <div className="tierbtn">
      {Array.from(["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"]).map(
        (element) => (
          <button
            className="tier1"
            key={element}
          >
            {element}
          </button>
        )
      )}
    </div>
  );
};

export default Button;
