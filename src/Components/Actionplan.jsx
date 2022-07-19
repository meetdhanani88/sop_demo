import React, { useState } from "react";
import "./Actionplan.css";
import user from "../images/users.png";
import blue_plus from "../images/bi_plus_blue.png";
import down from "../images/down.png";
import menu from "../images/menu.png";
import dmenu from "../images/d-menu.png";
import plusicon from "../images/Frame 671.png";
import minusicon from "../images/Frame 688.png";
import line from "../images/Line 1.png";
import eye from "../images/eye.png";
import Delete from "./Delete";
import Newplan from "./Newplan";
import SopAccess from "./SopAccess";

function Actionplan() {
  const [actionplan_one, setactionplanone] = useState([
    "Marketing",
    "Design",
    "Sales",
  ]);
  const [actionplan_two, setactionplantwo] = useState([
    "Wordpress",
    "Google Drive",
  ]);
  const [showlevel1, setshowlevel1] = useState(null);
  const [showlevel2, setshowlevel2] = useState(null);
  const [showdelete, setshowdelete] = useState(false);
  const [shownewplan, setshownewplan] = useState(false);
  const [showsopaccess, setshowsopaccess] = useState(false);
  const [deleteindex, setdeleteindex] = useState();

  function handellvl1(index) {
    setshowlevel1((pre) => {
      if (index === pre) {
        setshowlevel1(null);
      } else {
        setshowlevel1(index);
      }
    });
  }

  function handlelvl2(index) {
    setshowlevel2((pre) => {
      if (index === pre) {
        setshowlevel2(null);
      } else {
        setshowlevel2(index);
      }
    });
  }

  function delete_actionplan_one(i) {
    setshowdelete(true);
    setdeleteindex(i);
  }
  return (
    <>
      {showdelete && (
        <Delete
          setshowdelete={setshowdelete}
          actionplan_one={actionplan_one}
          deleteindex={deleteindex}
          setactionplanone={setactionplanone}
        ></Delete>
      )}

      {shownewplan && (
        <Newplan
          setshownewplan={setshownewplan}
          setactionplanone={setactionplanone}
        ></Newplan>
      )}

      {showsopaccess && (
        <SopAccess setshowsopaccess={setshowsopaccess}></SopAccess>
      )}
      <div className="actionplan-main">
        <div className="actionplan_container">
          <div className="actionplan_SOP">SOP</div>
          <div className="actionplan_head">Action Plans</div>
          <div className="actionplan_btn1 btn">
            <div className="actionplan_btn1_vector">
              <img src={user} alt="" className="actionplan_btn1_vector" />
            </div>
            <div
              className="actionplan_btn1_title"
              onClick={() => setshowsopaccess(true)}
            >
              Manage Access
            </div>
          </div>
          <div
            className="actionplan_btn2 "
            onClick={() => setshownewplan(true)}
          >
            <img src={blue_plus} alt="" />
            <div className="actionplan_btn2_title">New Plan</div>
          </div>

          <div className="actionplan_accordian ">
            {actionplan_one.map((item, i) => (
              <div key={i}>
                <div className="actionplan_one">
                  <img src={dmenu} alt="" className="action_plan_dmenu" />
                  <div className="actionplan_one_title">{item}</div>

                  <div className="dropdown action_plan_menu">
                    <img
                      src={menu}
                      alt=""
                      className="dropdown-toggle"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul
                      className="dropdown-menu action_plan_dropdown "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          className="dropdown-item action_plan_dropdown_item"
                          href=""
                        >
                          Edit Category
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item action_plan_dropdown_item"
                          href=""
                        >
                          Manage Access
                        </a>
                      </li>
                      <li onClick={() => delete_actionplan_one(i)}>
                        <a className="dropdown-item action_plan_dropdown_item delete_item">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>

                  <img
                    src={down}
                    alt=""
                    className="action_plan_down"
                    onClick={() => handellvl1(i)}
                    style={
                      showlevel1 === i ? {} : { transform: "rotate(-90deg)" }
                    }
                  />
                </div>
                {showlevel1 === i &&
                  actionplan_two.map((item2, i2) => (
                    <div key={item2}>
                      <div className="actionplan_two">
                        {showlevel2 === i2 ? (
                          <img
                            src={minusicon}
                            className="plusicon"
                            alt=""
                            onClick={() => handlelvl2(i2)}
                          ></img>
                        ) : (
                          <img
                            src={plusicon}
                            className="plusicon"
                            alt=""
                            onClick={() => handlelvl2(i2)}
                          ></img>
                        )}
                        <img src={dmenu} alt="" />
                        <div className="actionplan_two_title">{item2}</div>
                        <img src={menu} alt="" />
                      </div>

                      {showlevel2 === i2 && (
                        <>
                          <div className="actionplan_three">
                            <img src={line} alt="" className="line" />
                            <div className="pointer-div">
                              {[1, 2, 3].map((item, i) => (
                                <div className="pointer" key={item + i}>
                                  <img
                                    src={dmenu}
                                    alt=""
                                    className="pointermenu"
                                  />
                                  <div className="pointer-title">
                                    {"pointer" + item}
                                  </div>
                                  <img src={eye} alt="" className="eye-icon" />

                                  <div className="dropdown menu-icon">
                                    <img
                                      src={menu}
                                      alt=""
                                      className="dropdown-toggle"
                                      id="dropdownMenuButton1"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    />
                                    <ul
                                      className="dropdown-menu action_plan_dropdown "
                                      aria-labelledby="dropdownMenuButton1"
                                    >
                                      <li>
                                        <a
                                          className="dropdown-item action_plan_dropdown_item"
                                          href=""
                                        >
                                          Edit Sub Category
                                        </a>
                                      </li>
                                      <li onClick={() => setshowdelete(true)}>
                                        <a className="dropdown-item action_plan_dropdown_item delete_item">
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="addpointer">
                            <img
                              src={blue_plus}
                              className="addpointer-img"
                              alt=""
                            ></img>
                            <div className="addpointer-text">Add Pointer</div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Actionplan;
