import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './error-boundary-style.module.css';

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.errorPageContainer}>
        <h2>Oh no... Something is wrong</h2>
        <h2>
          {error.status} {error.statusText}
        </h2>
        <p>{error.data}</p>
      </div>
    );
  }
  if (error instanceof Error) {
    return (
      <div className={styles.errorPageContainer}>
        <h2>Oh no... Something is wrong</h2>
        <h2>Error</h2>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
  return (
    <div className={styles.errorPageContainer}>
      <h2>Oh no... Something is wrong</h2>
      <h2>Please restart a page!</h2>
    </div>
  );
}

export default ErrorBoundary;
