import { useRef,useContext } from 'react';
import AuthContex from '../../store/auth-context';
import {useHistory} from 'react-router-dom';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history=useHistory();
  const newPassInputRef=useRef();
  const ctx=useContext(AuthContex);

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredNewPassword=newPassInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAED3iaWsTVaHRCASaO8nYIbXrwkIkPOp8',{
      method:'POST',
      body:JSON.stringify({
        idToken:ctx.token,
        password:enteredNewPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-type':'application/json',
        'Authorization':'Bearer abc'
      }
    }).then((res)=>{
      history.replace('/');
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
