import { Link } from 'react-router-dom';
import { useGetAllPostsQuery } from '../../lib/redux/api';
import style from './post-list-style.module.css';
import ErrorBoundary from '../error-boundary/error-boundary';

function PostList() {
  const { data, isLoading, isError } = useGetAllPostsQuery();
  if (isError) {
    return <ErrorBoundary />;
  }

  return (
    <div className={style.postListSection}>
      {isLoading
        ? 'Loading...'
        : data?.map((post) => {
            return (
              <Link
                to={`/${post.id}`}
                key={post.id}
                className={style.postContainer}
              >
                <div className={style.mockImg} />
                <h5 className={style.postTitle}>{post.title}</h5>
                <p
                  className={style.postBody}
                >{`${post.body.split(' ').slice(0, 4).join(' ')}...`}</p>
              </Link>
            );
          })}
    </div>
  );
}

export default PostList;
