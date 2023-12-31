import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../utils/firebase';
import '../styles/Authentication.css';

const Authentication: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const signInWithEmailAndPasswordHandler = 
        (event: React.MouseEvent<HTMLButtonElement>, email: string, password: string) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(email, password).catch(error => {
              setError("Error signing in with password and email!");
              console.error("Error signing in with password and email", error);
            });
        };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.currentTarget;
      
      if(name === 'userEmail') {
          setEmail(value);
      }
      else if(name === 'userPassword'){
        setPassword(value);
      }
  };

  return (
    <div className="Authentication">
      <h1>Sign In</h1>
      <div>
        {error !== null && <div>{error}</div>}
        <form>
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;