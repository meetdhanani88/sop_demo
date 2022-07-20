import React, { useState } from "react";
import "./Newplan.css";

function Newplan({ setshownewplan, setactionplanone }) {
  //Getting input value
  const [val, setval] = useState("");

  //make new plan based on value
  function create() {
    setactionplanone((pre) => [...pre, val]);
    setshownewplan(false);
  }
  return (
    <div className="newplan_back_container">
      <div className="newplan_container">
        <div className="newplan_head"> Plan Name</div>
        <div className="newplan_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor.
          Sit amet, consectetur adipiscing consectetur adipiscing elit.
        </div>
        <div className="newplan_input">
          <label htmlFor="newplan">Name</label>
          <input
            type="text"
            name="newplan"
            placeholder="Name of Your Plan"
            autoFocus
            onChange={(e) => setval(e.target.value)}
          />
        </div>
        <div className="newplan_buttons">
          <button type="submit" onClick={create}>
            Create
          </button>
          <button onClick={() => setshownewplan(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Newplan;
