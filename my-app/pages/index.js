import Link from 'next/link';
import MainLayout from '../components/MainLayout';

const Home = () => {
  return (
    <MainLayout title='HOME'>
      <h1>HOME PAGE</h1>

      <Link href='/about'>GO TO ABOUT</Link>
      <br />
      <Link href={'/friends'}>GO TO FRIENDS</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        at, unde voluptate nulla, accusamus facilis mollitia expedita
        consequatur voluptas deserunt ipsa odit nemo nihil saepe quibusdam
        architecto alias, cum fugit!
      </p>
    </MainLayout>
  );
};

export default Home;
