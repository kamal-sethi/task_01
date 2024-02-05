import React from "react";

const ValueSetter = ({ setValue }) => {
  return (
    <>
      {Array.from(["Use Balance","$1000", "$100",]).map((element) => (
        <button
          className="setter"
          key={element}
          onClick={() =>
            setValue(
              element.toLowerCase() === "Clear".toLowerCase() ? "" : element
            )
          }
        >
          {element}
        </button>
      ))}
    </>
  );
};

export default ValueSetter;
