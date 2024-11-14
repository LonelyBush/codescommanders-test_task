import { FormEvent } from 'react';
import { useGetUserMutation } from '../../lib/redux/api';
import style from './sign-in-style.module.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [getUser, { isLoading }] = useGetUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    try {
      await getUser({ username });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={style.signInSection}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <h2>Sign in</h2>
        <input
          name="username"
          className={style.inputStyle}
          type="text"
          placeholder="Type your username..."
        />
        <button className={style.btnStyle} type="submit">
          Submit
        </button>
        {isLoading ? 'Loading...' : ''}
      </form>
    </div>
  );
}

export default SignIn;
