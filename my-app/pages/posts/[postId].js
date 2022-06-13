import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';

const Post = () => {
  const router = useRouter();
  return (
    <MainLayout title={router.query.postId}>
      <h1>POST {router.query.postId}</h1>
    </MainLayout>
  );
};

export default Post;
