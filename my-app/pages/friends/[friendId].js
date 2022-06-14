import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/friend.module.scss';

const Friend = ({ friend: serverFriend }) => {
  const [friend, setFriend] = useState(serverFriend);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `http://localhost:4200/friends/${router.query.friendId}`
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
      <Link href='/friends'>
        <span className={styles.go_back_btn}>Back to friends</span>
      </Link>
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
Friend.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { friend: null };
  }
  const res = await fetch(`http://localhost:4200/friends/${query.friendId}`);
  const friend = await res.json();
  return { friend };
};

//* NEW METHOD IF ONLY SSR
// export const getServerSideProps = async ({ query }) => {
//   if (!req) {
//     return { friend: null };
//   }
//   const res = await fetch(`http://localhost:4200/friends/${query.friendId}`);
//   const friend = await res.json();

//   return {
//     props: { friend }, // will be passed to the page component as props
//   };
// };

export default Friend;
