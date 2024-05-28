import axios from "axios";
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState('')

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      setUser(res.data.data)
    })
   
  }, [])
    
  return (
    <>
        <div className="user" >
          <img className="margin-botton" src={user.avatar} alt="" style={{ borderRadius: '50%' }} />
          <span className="user-name margin-botton" >
            {user.first_name} {user.last_name}
          </span>
          {user.email}
        </div>
    </>
  );
}


export default User;

