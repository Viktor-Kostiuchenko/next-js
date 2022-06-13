import Head from 'next/head';
import MainLayout from '../../components/MainLayout';

const posts = [
  'Lorem, ipsum.',
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla.',
  'Lorem ipsum dolor sit amet consectetur.',
];

const Posts = () => {
  return (
    <MainLayout title='POSTS'>
      <h1>POSTS PAGE</h1>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default Posts;
