import { useParams } from 'react-router-dom';
import { useGetCommentsQuery, useGetPostQuery } from '../../lib/redux/api';
import style from './post-style.module.css';

function Post() {
  const { postId } = useParams();
  const {
    data: postData,
    isLoading: isLoadingPost,
    isError: isErrorPost,
  } = useGetPostQuery(postId ?? '');
  const {
    data: commentsData,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useGetCommentsQuery(postId ?? '');

  if (isLoadingPost && isLoadingComments) {
    return <div>Loading...</div>;
  }

  if (isErrorPost && isErrorComments) {
    return (
      <div className={style.error}>
        There are no such posts or comments according to your parameters!
      </div>
    );
  }
  return (
    <div className={style.postSection}>
      <div className={style.postContainer}>
        <h2 className={style.postTitle}>{postData?.title}</h2>
        <div className={style.mockImg} />
        <p className={style.postBody}>{postData?.body}</p>
      </div>

      <div className={style.commentsContainer}>
        Comments:
        {commentsData?.map((elem) => {
          return (
            <div key={elem.id} className={style.comment}>
              <h2>{elem.name}</h2>
              <p>{elem.body}</p>
              <p>{`by ${elem.email}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
