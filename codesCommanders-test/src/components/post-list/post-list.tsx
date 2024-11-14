import { useGetAllPostsQuery } from '../../lib/redux/apiReducer';
import style from './post-list-style.module.css';

function PostList() {
  const { data, isLoading } = useGetAllPostsQuery();

  return (
    <div className={style.postListSection}>
      {isLoading
        ? 'Loading...'
        : data?.map((post) => {
            return (
              <div key={post.id} className={style.postContainer}>
                <div className={style.mockImg} />
                <h4 className={style.postTitle}>{post.title}</h4>
                <p
                  className={style.postBody}
                >{`${post.body.split(' ').slice(0, 4).join(' ')}...`}</p>
              </div>
            );
          })}
    </div>
  );
}

export default PostList;
