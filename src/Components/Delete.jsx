import React from "react";
import "./Delete.css";

function Delete({
  setshowdelete,
  actionplan_one,
  deleteindex,
  setactionplanone,
}) {
  function deletehandel() {
    const arr = actionplan_one.filter(
      (item) => item !== actionplan_one[deleteindex]
    );
    setactionplanone(arr);
    setshowdelete(false);
  }
  return (
    <div className=" delete_container_fluid ">
      <div className="delete_container">
        <div className="delete_container_head">
          Delete Category or/ Sub Category
        </div>
        <div className="delete_container_para">
          Are you sure you want to delete this learning, this step cannot be
          undone
        </div>
        <div className="delete_container_buttons">
          <button onClick={() => deletehandel()}>Delete</button>
          <button onClick={() => setshowdelete(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
