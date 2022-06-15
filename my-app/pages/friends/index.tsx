import Link from 'next/link';
import { FC } from 'react';
import MainLayout from '../../components/MainLayout';
import { IFriend } from '../../interfaces/friend';
import styles from '../../styles/friends.module.scss';

interface IProps {
  friends: IFriend[]
}

const Friends = ({ friends }: IProps) => {
  console.log(friends);
  return (
    <MainLayout title='FRIENDS'>
      <h1>FRIENDS PAGE</h1>
      <ul className={styles.list}>
        {friends.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/friends/[friendId]`} as={`/friends/${id}`}>
              {name}
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
