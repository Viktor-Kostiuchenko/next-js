import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/friends.module.scss'

// const posts = [
//   'Lorem, ipsum.',
//   'Lorem ipsum dolor sit amet.',
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.',
//   'Lorem ipsum dolor sit amet consectetur.',
// ];

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

  console.log(friends)

  return (
    <MainLayout title='FRIENDS'>
      <h1>FRIENDS PAGE</h1>
      <ul className={styles.list}>
        {friends.map(({id, name, phone, address, picture, email}) => (
          <li key={id} className={styles.item}>
            <Link href={`/friend/[friendId]`} as={`/friend/${id}`}>{name}</Link>
            {/* <img className={styles.img} src={picture} alt={`${name} photo`}/>
            <div>
              <h2 className={styles.name}>{name}</h2>
              <adress className={styles.address}>
                <p>{address}</p>
                <a href={`mailto:${email}`}>{email}</a>
                <br/>
                <br/>
                <a href={`tel:${phone}`}>{phone}</a>
              </adress>
            </div> */}
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
