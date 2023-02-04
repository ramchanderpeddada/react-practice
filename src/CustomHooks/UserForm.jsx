import React from "react";
import useInput from "../hooks/useInput";

function UserForm() {
  const [firstName, bindFname, resetFname] = useInput("");
  const [lastName, bindLname, resetLname] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFname();
    resetLname();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFname} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLname} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
