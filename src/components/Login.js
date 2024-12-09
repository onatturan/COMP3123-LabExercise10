import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(credentials));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" onChange={handleChange} placeholder="Email" />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
