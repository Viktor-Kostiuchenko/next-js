import styles from '../styles/home.module.scss';
import MainLayout from '../components/MainLayout';

const Home = () => {
  return (
    <MainLayout title='HOME'>
      <h1 className={styles.title}>HOME PAGE</h1>

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
