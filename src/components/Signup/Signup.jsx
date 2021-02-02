import React from 'react';
import './Signup.scss';
import Card from '../Card/Card';

const Signup = () => {
  return (
    <Card>
      <form className="signup">
        <h2 className="signup__title">Sign Up</h2>
        <label for="email" className="signup__email-label">Email</label>
        <input id="email" type="email" className="signup__email-input"></input>
        <label for="password" className="signup__password-label">Password</label>
        <input id="password" type="password" className="signup__password-input"></input>
        <label for="password-conf" className="signup__password-conf-label">Password confirmation</label>
        <input id="password-conf" type="password" className="signup__password-conf-input"></input>
        <button type="button" className="signup__button">Sign Up</button>
        <div className="signup__footer">Already have an account? Sign In</div>
      </form>
    </Card>
  )
}

export default Signup;