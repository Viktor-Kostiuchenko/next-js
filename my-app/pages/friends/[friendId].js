import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';

const Friend = () => {
  const router = useRouter();
  return (
    // <MainLayout title={router.query.postId}>
    //   <h1>POST {router.query.postId}</h1>
    // </MainLayout>
    <>
      <h1>POST {router.query.friendId}</h1>
    </>
  );
};

export default Friend;
