import React, { useState } from "react";
import ValueSetter from "./ValueSetter";

const Yearbtn = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        className="form"
        placeholder="0.000 USD"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ValueSetter setValue={setValue} />
      <h6 className="calc">Timeframe</h6>

      {Array.from([1, 7, 30]).map((element) => (
        <button className="tier" key={element} onClick={() => setValue()}>
          {element} Days
        </button>
      ))}
      {Array.from([1, 5]).map((element) => (
        <button className="tier" key={element} onClick={() => setValue()}>
          {element} Year
        </button>
      ))}
    </>
  );
};

export default Yearbtn;
