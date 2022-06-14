import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/friends.module.scss'

const Friends = ({ friends }) => {
  // const [friends, setFriends] = useState([]);

  // useEffect(() => {
  //   async function getFriends() {
  //     const response = await fetch('http://localhost:4200/friends');
      
  //     const res = await response.json;
  //     console.log(JSON.stringify(res))
  //     // setFriends(result);
  //   }
  //   getFriends()
  // }, []);

  return (
    <MainLayout title='FRIENDS'>
      <h1>FRIENDS PAGE</h1>
      <ul className={styles.list}>
        {friends.map(({id, name, phone, address, picture, email}) => (
          <li key={id}>
            <Link href={`/friends/[friendId]`} as={`/friends/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Friends.getInitialProps = async () => {
  const res = await fetch('http://localhost:4200/friends')
  const friends = await res.json()
  return { friends }
}

export default Friends;
