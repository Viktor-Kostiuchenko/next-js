import Link from 'next/link';
import styles from '../styles/error.module.scss'

const ErrorPage = () => {
  return (
    <>
      <h1 className={styles.error}>Error Page</h1>
      <p>
        Oooops, <Link href='/'><span className={styles.go_back}>go back</span></Link> to home page
      </p>
    </>
  );
};

export default ErrorPage;
