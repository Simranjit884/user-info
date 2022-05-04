import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onClickHandler = () => {
    setShowErrorModal(false);
  }

  const onAddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowErrorModal(true);
      return;
    }
    if (+enteredAge < 0) {
      setShowErrorModal(true);
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.addedUser({
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    });
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
    {showErrorModal ? <ErrorModal title="An error occured!" message="Something went wrong!" onClick={onClickHandler}/> : ''}    
    <Card className={classes.input}>
      <form onSubmit={onAddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(In Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
