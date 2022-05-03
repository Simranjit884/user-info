import React from "react";
import Card from "../UI/Card";

const AddUser = () => {
  const onAddUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={onAddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(In Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
