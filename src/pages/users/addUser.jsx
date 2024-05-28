import React,{useContext} from "react";
import axios from "axios";
import UserContext from "./userContext";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function AddUser() {
  const { usersList, setUsersList, permitEdit, setError, setErrType } = useContext(UserContext);
  const addUserFormValid = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(addUserFormValid) })
  
  return (
    <>
      {!permitEdit ?
        <div>
          <form onSubmit={handleSubmit(addUserSubmit)} className="add-user">
            <input {...register('first_name')} className="margin-btn input-form" type="text" autoFocus placeholder="First Name..." />
            <input {...register('last_name')} className="margin-btn input-form" type="text" placeholder="Last Name..." />
            <input {...register('email')} className="margin-btn input-form" type="text" placeholder="Email..." />
            <input type="submit" value={'Add User'} className="add-user-btn green-btn" />
          </form>
         
          {
            errors &&
            <div className="error-form-valid">
              <span>{errors.first_name?.message}</span>
              <span>{errors.last_name?.message}</span>
              <span>{errors.email?.message}</span>
            </div>
          }
        </div>
        :
        <div className="Edit-show">
          Edit User
        </div>
      }
    </>
  )
  async function addUserSubmit(data) {
    let newUser = { id: usersList.length === 0 ? 1 : usersList[usersList.length - 1].id + 1, email: data.email, first_name: data.first_name, last_name: data.last_name, avatar: '#' }
    try {
      await axios.post('https://reqres.in/api/users', newUser)
      setUsersList([...usersList, newUser])
    } catch (error) {
      setError(true)
      setErrType(error.message)
    }
    
  }
  
}

export default AddUser;
