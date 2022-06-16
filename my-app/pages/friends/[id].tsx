import { NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/friend.module.scss';

const Friend = ({ friend: serverFriend }) => {
  const [friend, setFriend] = useState(serverFriend);
  const router = useRouter();

  const onBackClick = () => {
    router.back();
  };

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `${process.env.API_URL}/friends/${router.query.id}`
      );
      const result = await response.json();
      setFriend(result);
    };

    if (!serverFriend) {
      load();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <button onClick={onBackClick}>
        <span className={styles.go_back_btn}>go back</span>
      </button>
      {!friend && <h1>LOADING ...</h1>}
      {friend && (
        <div className={styles.friend}>
          <img
            className={styles.img}
            src={friend.picture}
            alt={`${friend.name} photo`}
          />
          <div>
            <h2 className={styles.name}>{friend.name}</h2>
            <div className={styles.address}>
              <p>{friend.address}</p>
              <a href={`mailto:${friend.email}`}>{friend.email}</a>
              <br />
              <br />
              <a href={`tel:${friend.phone}`}>{friend.phone}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

//! OLD METHOD IF WE USE AS SSR AND CSR
Friend.getInitialProps = async ({ query, req }:NextPageContext) => {
  if (!req) {
    return { friend: null };
  }
  const res = await fetch(`${process.env.API_URL}/friends/${query.id}`);
  const friend = await res.json();
  return { friend };
};

//* NEW METHOD IF ONLY SSR
// export const getServerSideProps = async ({ query }) => {
//   if (!req) {
//     return { friend: null };
//   }
//   const res = await fetch(`http://localhost:4200/friends/${query.id}`);
//   const friend = await res.json();

//   return {
//     props: { friend }, // will be passed to the page component as props
//   };
// };

export default Friend;
