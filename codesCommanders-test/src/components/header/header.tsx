import { Link, useNavigate } from 'react-router-dom';
import style from './header-style.module.css';
import { useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../../lib/redux/auth-slice';
import { useDispatch } from 'react-redux';

function Header() {
  const store = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={style.headerContainer}>
      <Link to={'/'}>
        <h2>Test Application</h2>
      </Link>
      {store.isAuth ? (
        <>
          <p>{store.user?.name}</p>
          <button className={style.linkStyles} onClick={handleLogout}>
            Log out
          </button>
        </>
      ) : (
        <button
          className={style.linkStyles}
          onClick={() => {
            navigate('/sign-in');
          }}
        >
          Sign in
        </button>
      )}
    </header>
  );
}

export default Header;
