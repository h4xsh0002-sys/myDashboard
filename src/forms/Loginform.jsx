import React from 'react'
import { useState } from 'react'

export default function Loginform({onLogin}) {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(event){
      event.preventDefault();
      onLogin(email.trim(),password);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login-email">Email</label>
      <input 
      id='login-email'
      placeholder='Enter Your Email'
      value={email}
      onChange={(event) =>
        setEmail(event.target.value)}
      required
      />
<label htmlFor='login-password'>Password</label>
<input
id='login-password'
type='password'
placeholder='Enter your password'
value={password}
onChange={(event) =>
  setPassword(event.target.value)
}
required
/>

<button type='submit'>Login</button>
</form>
  )
}
