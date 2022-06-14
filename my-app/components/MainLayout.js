import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/components/MainLayout.module.scss'

const pages = [
  { page: 'Home', link: '/' },
  { page: 'About', link: '/about' },
  { page: 'Friends', link: '/friends' },
];

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>MY APP | {title}</title>
      </Head>
      <div className={styles.main_container}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {pages.map(({ page, link }) => (
              <li key={`nav_${page}`} className={styles.nav_item}>
                <Link href={link}>
                  <span className={styles.nav_link}>{page}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
