import React from 'react';
import { useDispatch } from "react-redux";
import { LoginUser, LogoutUser } from './ReduxState/Reduxstate';

const LoginPage = () => {

    const dispatch = useDispatch();
  return (
    <div>
        <button
        onClick={() =>{
           dispatch(
            LoginUser({
                userName: "favour",
                Age: 10,
                Email: "favour@gmail.com",
                stack: "Fullstack"
            })
           )
        }}
        >Login</button>
        <button
        onClick={() =>{
            dispatch(
                LogoutUser()
            )
        }}
        >Logout</button>
    </div>
  )
}

export default LoginPage