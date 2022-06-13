import Head from 'next/head';
import Link from 'next/link';

const pages = [
  { page: 'Home', link: '/' },
  { page: 'About', link: '/about' },
  { page: 'Posts', link: '/posts' },
];

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>MY APP | {title}</title>
      </Head>
      <nav>
        <ul>
          {pages.map(({ page, link }) => (
            <li key={`nav_${page}`}>
              <Link href={link}>
                <a>{page}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          height: 60px;
          background: #1e1e1e;
        }

        ul {
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          list-style: none;
        }

        nav a {
          color: #f1f1f1;
          text-decoration: none;
        }

        main {
          padding: 20px;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
