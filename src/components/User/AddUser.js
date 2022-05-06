import React, { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  }

  const onAddUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }

    props.addedUser({
      id: Math.random().toString(),
      name: enteredName,
      age: enteredUserAge,
    });
  };

  return (
    <Fragment>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}    
    <Card className={classes.input}>
      <form onSubmit={onAddUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age(In Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Fragment>
  );
};

export default AddUser;
