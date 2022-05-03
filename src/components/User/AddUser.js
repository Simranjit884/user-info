import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  }

  const onAddUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onAddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age(In Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
