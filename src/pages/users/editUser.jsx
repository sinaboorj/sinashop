import { useContext } from "react";
import UserContext from "./userContext";
import axios from "axios";

const EditUser = (props) => {
  const { id, setId, usersList, setUsersList, setPermitEdit, textButton } = useContext(UserContext);
  return (
    <>
      <div className="user-list">
        {usersList?.map((user, index) => {
          if (id === user.id) {
          return ( // کاربر مورد نظر به حالت ویرایش میرود
            <div className="user" key={index}>
              <img className="margin-botton" src={user.avatar} alt="" style={{width:'49px' ,height:'49px'}}  />
              <input className="margin-botton" onChange={(e) => { props.user.first_name=e.target.value; }} defaultValue={user.first_name} type="text" style={{fontSize:'1rem', width:'150px'}} autoFocus />
              <input className="margin-botton" onChange={(e) => { props.user.last_name=e.target.value;  }} defaultValue={user.last_name} type="text" style={{fontSize:'1rem', width:'150px'}} />
              <input className="margin-botton" onChange={(e) => { props.user.email=e.target.value;  }} defaultValue={user.email} type="email" style={{fontSize:'1rem', width:'185px'}} />
              <button className="success general-btn" onClick={() => { setId(user.id); editUser(user) }} >Save</button>
            </div>
            );
          } else { // کاربران دیگر به صورت عادی نمایش داده میشوند
            return (
              <div className="user" key={index}>
                <img className="margin-botton" src={user.avatar} alt=""  />
                <span className="user-name margin-botton" style={{ color: textButton === 'Luck' ? 'green' : 'red' }}>
                 {user.first_name} {user.last_name}
                 </span>
                <span className="user-name margin-botton" > {user.email} </span>
                <div>
                  <button className="warnning general-btn deactive" disabled>Edit</button>
                  <button className="danger general-btn deactive" disabled>Delete</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );

  //************************************* functions *************************************************** */   
  function editUser(user) {
    let editUser = {id:id, email:props.user.email, first_name: props.user.first_name, last_name: props.user.last_name ,avatar:user.avatar}
    let text = -1
    if (editUser.first_name === undefined || editUser.last_name === undefined || editUser.email === undefined ||
      editUser.first_name === '' || editUser.last_name === '' || editUser.email === '' || text !== -1) {
      
    } else {
      const index = usersList.findIndex(item => item.id === user.id)
      axios.put(`https://reqres.in/api/users/${user.id}`,user)
      usersList[index] = editUser
  
      setUsersList(usersList)
      setPermitEdit(false)
    }
  } 
}
 
export default EditUser;
