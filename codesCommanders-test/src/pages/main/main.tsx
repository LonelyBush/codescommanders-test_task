import { useSelector } from 'react-redux';
import PostList from '../../components/post-list/post-list';
import { selectCurrentUser } from '../../lib/redux/auth-slice';
import style from './main-style.module.css';

function Main() {
  const store = useSelector(selectCurrentUser);
  console.log(store);

  return (
    <main className={style.mainSection}>
      <PostList />
    </main>
  );
}

export default Main;
