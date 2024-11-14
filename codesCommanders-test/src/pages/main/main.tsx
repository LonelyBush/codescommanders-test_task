import PostList from '../../components/post-list/post-list';
import style from './main-style.module.css';

function Main() {
  return (
    <main className={style.mainSection}>
      <PostList />
    </main>
  );
}

export default Main;
