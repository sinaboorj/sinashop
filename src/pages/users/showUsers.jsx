import React, { useContext,useEffect } from "react";
import UserContext from "./userContext";
import LoadingUsers from "./Loading";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowUsers = () => {
  const { usersList, setUsersList, setId, setPermitEdit, textButton, isLoading, setIsLoading,setError,setErrType } = useContext(UserContext);
  
  const fetchData = async () => {
    try {
      const res = await axios.get('https://reqres.in/api/users')
      const data = localStorage.getItem('setUsersList')
      setUsersList(JSON.parse(data) ?? res.data?.data)
      setIsLoading(false)
    } catch (error) {
      setError(true)
      setErrType(error.message)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])

  useEffect(() => {
    if (usersList.length !== 0)
      localStorage.setItem('setUsersList', JSON.stringify(usersList))
  }, [usersList])

  if (isLoading) return <LoadingUsers />

  return (
    <>
      <div className="user-list">
        {usersList.map((user, index) => {
          return (
            <div className="user" key={index}>
              <Link to={`/users/${user.id}`}><img className="margin-botton" src={user.avatar} alt="" /> </Link>
              <span className="user-name margin-botton" style={{ color: textButton === 'Luck' ? 'green' : 'red' }}>
                {user.first_name} {user.last_name}
              </span>
              <span className="user-name margin-botton" > {user.email} </span>
              <div>
                <button className="normal general-btn" onClick={() => { setPermitEdit(true); setId(user.id) }} >Edit</button>
                <button className="danger general-btn" onClick={() => { handleDelete(user) }} >Delete</button>
              </div>
            </div>
          );
        })
        }
      </div>
      <button className="btn btn-info btn-dark" onClick={() => { localStorage.removeItem('setUsersList'); fetchData() }}>Refetch</button>
    </>
  )

  function handleDelete(user) {
    axios.delete(`https://reqres.in/api/users/${user.id}`)
    const newList = usersList.filter(item => item.id !== user.id)
    setUsersList(newList)
  }

}

export default ShowUsers;