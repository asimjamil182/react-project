import React from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";


const LoginPage = () => {
    const userLoginHandler = async (data) => {
        console.log(data);
        // try {
        //     const response = await axios.get('/users', data);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Error fetching users:', error);
        // }
    }

    return (
        <div className="">
            <LoginForm userLoginHandler={userLoginHandler} />
        </div>
    );
}

export default LoginPage;