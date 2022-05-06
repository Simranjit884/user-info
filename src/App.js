import React, {Fragment, useState} from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addedUserHandler = (newUser) => {
    setUsersList(prevUser => [...prevUser, newUser]);
  }
  return (
    <Fragment>
      <AddUser addedUser={addedUserHandler}/>
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
