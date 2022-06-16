import Link from 'next/link';
import { FC } from 'react';
import MainLayout from '../../components/MainLayout';
import { IFriend } from '../../interfaces/friend';
import styles from '../../styles/friends.module.scss';
// import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router';

interface IProps {
  friends: IFriend[];
}

const Friends = ({ friends }: IProps) => {

  return (
    <MainLayout title='FRIENDS'>
      <h1 className={styles.title}>FRIENDS PAGE</h1>
      <ul className={styles.list}>
        {friends.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/friends/[id]`} as={`/friends/${id}`}>
              <a className={styles.link}>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Friends.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/friends`);
  const friends: IFriend[] = await res.json();
  return { friends };
};


export default Friends;