import { useState } from "react";

import React from 'react'

export default function Registerform({onRegister}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        onRegister({
            username:username.trim(),
            email:email.trim(),
            password
        });
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlfor="register-name">Name</label>
        <input
        id='register-name'
        type='text'
        placeholder="Enter Your Name"
        value={username}
        onChange={(event) =>
        setUsername(event.target.value)}
        required
        />


        <label htmlfor="register-email">Email</label>
        <input
        id='register-email'
        type='email'
        placeholder="Enter Your Email"
        value={email}
        onChange={(event) =>
        setEmail(event.target.value)}
        required
        />


        <label 
        htmlFor="register-password">Password</label>
        <input
        id="register-password"
        type="password"
        placeholder="At least 6 characters"
        value={password}
        onChange={(event) =>
            setPassword(event.target.value)
        }
        minLength={6}
        maxLength={10}
        required
        />

        <button type="submit">Register</button>
        </form>
  );
}
