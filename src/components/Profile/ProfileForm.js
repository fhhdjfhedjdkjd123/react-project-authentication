import { useRef } from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPassInputRef=useRef();

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredNewPassword=newPassInputRef.current.value();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' rep={newPassInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
