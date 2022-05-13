import React from 'react';
import MyInput from "../ui/MyInput/MyInput";
import MyButton from "../ui/MyButton/MyButton";

const Login = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Login to post message</h1>
            <form style={{margin: '80px auto', width: '500px', display: 'flex'}}>
                <MyInput placeholder={'name'}/>
                <MyInput placeholder={'password'}/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;