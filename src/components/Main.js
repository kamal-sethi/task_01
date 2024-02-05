import React, { useState } from "react";

import {Switch } from "@mui/material";
import Yearbtn from "./Yearbtn";
import Details from "./Details";
import Button from "./Button";
// import ValueSetter from "./ValueSetter";

const Main = () => {
  // const [time, setTime] = useState("");
  const [show, setShow] = useState(false);
  // const calculate = (values) => {};
  return (
    <>
      <div className="box">
        <div className="heading ">
          <div className="d-flex row">
            <div className="col-md-10">
              <h4 className="cal">ROI Calculator</h4>
            </div>
            <div className="col-md-2">
              <Switch defaultChecked />
            </div>
          </div>
          <Yearbtn />
          {/* <ValueSetter/> */}

          <div className="d-flex row">
            <div className="col-md-10">
              <h6 className="calc ">Enable Accelearted APY</h6>
            </div>
            <div className="col-md-2">
              <Switch defaultChecked />
            </div>
          </div>
          <h6 className="m-2 text-muted font-size-10">Select Tier</h6>
          <Button/>
          <p className="text-end text-muted mt-20">ROI at current rates</p>
          <input type="text" className="form" placeholder="0.000 USD"></input>

          <Details />
        </div>
      </div>
    </>
  );
};

export default Main;
