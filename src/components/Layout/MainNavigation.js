import { Link ,useHistory} from 'react-router-dom';
import { useContext } from 'react';
import AuthContex from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const history=useHistory();
  const ctx=useContext(AuthContex);
  const isLoggedIn=ctx.isLoggedIn;

  const logoutHandler=()=>{
    ctx.logout();
    history.replace('/');

  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
           <li>
             <Link to='/auth'>Login</Link>
           </li>
          )}
          {isLoggedIn && (
           <li>
            <Link to='/profile'>Profile</Link>
           </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
