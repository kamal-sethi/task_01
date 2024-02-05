import React, { useEffect, useState } from "react";
const Details = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <button onClick={()=>setShow(!show)} className="btn">Show Details &#x2193;</button>
      ) : (
        <div>
          <button onClick={()=>setShow(!show)} className="btn">Hide Details &#x2193;</button>
          <div className="d-flex row">
            <div className="col-md-10">
              <h6>APY</h6>
            </div>
            <div className="col-md-2">
              <p className="text-warning">9.0 %</p>
            </div>
          </div>
          <ul type="disc">
            <li>
              All figures are provided for your convience only and by no means
              represnet gurranty returns
            </li>
            <li>calculated based on current rates</li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Details;
