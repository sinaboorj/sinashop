import React from "react";
import { useState } from "react";
import AddUser from "./addUser";
import ShowUsers from "./showUsers";
import UserContext from "./userContext";
import EditUser from "./editUser";
import PropTypes from "react";
import UsersCount from "./userCount";

function Users() {
  const [usersList, setUsersList] = useState([]);
  const user = { id: 0, first_name: '', last_name: '', email: '',avatar:'#' };
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errType, setErrType] = useState('');
  const [error, setError] = useState(false);
  const [permitEdit, setPermitEdit] = useState(false);
  const [textButton, setTextButton] = useState("Luck");

  return (
    <>
      <UserContext.Provider
        value={{
          id, setId, usersList, setUsersList, onToggleLuck,setIsLoading,error, setError,
          textButton, setTextButton, permitEdit, setPermitEdit, isLoading, errType, setErrType,
        }}
      >
        <AddUser user={user} />
        <UsersCount />
        {permitEdit ? <EditUser user={user} /> : <ShowUsers user={user} />}
      </UserContext.Provider>
    </>
  );

  function onToggleLuck() {
    if (textButton==='Luck') {
      setTextButton("Unluck");
    } else {
      setTextButton("Luck");
    }
  }

}

Users.prototype = {
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string
}

export default Users;