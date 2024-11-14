import { Link } from 'react-router-dom';
import style from './header-style.module.css';

function Header() {
  return (
    <header className={style.headerContainer}>
      <h2>Test Application</h2>
      <Link to={'/sign-in'}>Sign In</Link>
    </header>
  );
}

export default Header;
