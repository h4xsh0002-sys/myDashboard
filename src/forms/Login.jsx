import React from 'react'

import Loginform from './Loginform';
export default function Login({onLogin, onRegister}) {
  return (
    <section className='form-card'>
        <h1>Login</h1>
        <p>Enter your account details to continue.</p>
        <Loginform onLogin={onLogin} />
        <p className='form-switch'>
            Don't have an account?{" "}
            <button className='text-button'
            onClick={onRegister}>Register</button>
        </p>
    </section>
  );
}
