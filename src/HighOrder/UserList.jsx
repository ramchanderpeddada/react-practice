import React from "react";
import Hoc from "./Hoc";

const UserList = ({ data }) => {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name} </strong>
        </p>
      </div>
    );
  });

  return (
    <>
      <div>{renderUsers}</div>
    </>
  );
};

const SearchUsers = Hoc(UserList, "users");

export default SearchUsers;
