import React from 'react'

import Registerform from './Registerform';
export default function Register({onRegister, onBackToLogin}) {
  return (
    <section className='form-card'>
        <h1>Create Account</h1>
        <p>Fill in the details below to register.</p>
        <Registerform onRegister={onRegister} />
        <p className='form-switch'>
            Already registered?{" "}
            <button className='text-button'
            onClick={onBackToLogin}>Login</button>
            </p>
      
    </section>
  );
}
