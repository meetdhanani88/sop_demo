import React, { useState } from "react";
import "./SopAccess.css";
import biplus from "../images/bi_plus.png";
import pic from "../images/Ellipse 2.png";
import close from "../images/bi_close.png";

let membernames = ["Aryan", "Karan", "kisan", "Rishi"];
function SopAccess({ setshowsopaccess }) {
  //selected person state based on category
  const [marketselected, setmarketselected] = useState("");
  const [salesselected, setsalesselected] = useState("");
  const [designselected, setdesignselected] = useState("");

  //select person
  function select(i, setfun) {
    setfun((pre) => [...new Set([...pre, membernames[i]])]);
  }

  //delete person after selection
  function remove(e, i, setfun, setdata) {
    e.stopPropagation();
    if (setdata.includes(membernames[i])) {
      const newitems = setdata.filter((item) => item !== membernames[i]);
      setfun(newitems);
    }
  }

  return (
    <div className="newplan_back_container">
      <div className="sopacess">
        <div className="sopacess_head">SOP Access</div>
        <div className="sopacess_sales">
          <div>Sales</div>
          <div className="sopacess_sales_input">
            <div>
              <label htmlFor="sales">TEAMMATES</label>
              {!salesselected || salesselected.length === 0 ? (
                <div>Select Member</div>
              ) : (
                <div className="sopacess_tags">
                  {salesselected.map((item, i) => (
                    <label key={i}>
                      <div>
                        <img src={pic} alt="pic" />
                        <div>{item}</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="sopdropdown" tabIndex={1}>
                <i className="db2" tabIndex={1} />
                <img src={biplus} alt="plus" />
                <div className="sopdropdown-content">
                  {membernames.map((item, i) => (
                    <div key={i} onClick={() => select(i, setsalesselected)}>
                      <div className="dropname_pic">
                        <img src={pic} alt="pic" />
                        <div>{item}</div>
                      </div>
                      <div
                        className="dropremove"
                        onClick={(e) =>
                          remove(e, i, setsalesselected, salesselected)
                        }
                      >
                        <img src={close} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sopacess_market">
          <div>Marketing</div>
          <div className="sopacess_market_input">
            <div>
              <label htmlFor="market">TEAMMATES</label>

              {!marketselected || marketselected.length === 0 ? (
                <div>Select Member</div>
              ) : (
                <div className="sopacess_tags">
                  {marketselected.map((item, i) => (
                    <label key={i}>
                      <div>
                        <img src={pic} alt="pic" />
                        <div>{item}</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="sopdropdown" tabIndex={2}>
                <i className="db2" tabIndex={1} />
                <img src={biplus} alt="plus" />
                <div className="sopdropdown-content">
                  {membernames.map((item, i) => (
                    <div key={i} onClick={() => select(i, setmarketselected)}>
                      <div className="dropname_pic">
                        <img src={pic} alt="pic" />
                        <div>{item}</div>
                      </div>
                      <div
                        className="dropremove"
                        onClick={(e) =>
                          remove(e, i, setmarketselected, marketselected)
                        }
                      >
                        <img src={close} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sopacess_design">
          <div>Design</div>
          <div className="sopacess_design_input">
            <div>
              <label htmlFor="design">TEAMMATES</label>
              {!designselected || salesselected.length === 0 ? (
                <div>Select Member</div>
              ) : (
                <div className="sopacess_tags">
                  {designselected.map((item, i) => (
                    <label key={i}>
                      <div>
                        <img src={pic} alt="pic" />
                        <div>{item}</div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="sopdropdown" tabIndex={3}>
                <i className="db2" tabIndex={1} />
                <img src={biplus} alt="plus" />
                <div className="sopdropdown-content">
                  {membernames.map((item, i) => (
                    <div key={i} onClick={() => select(i, setdesignselected)}>
                      <div className="dropname_pic">
                        <img src={pic} alt="pic" />
                        <div>{item}</div>
                      </div>
                      <div
                        className="dropremove"
                        onClick={(e) =>
                          remove(e, i, setdesignselected, designselected)
                        }
                      >
                        <img src={close} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sopacess_buttons">
          <button onClick={() => setshowsopaccess(false)}>Update</button>
          <button onClick={() => setshowsopaccess(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default SopAccess;
