import Post from '../Post';
import { useApplication } from '../../context/Application';
import { Container, SubTitle } from './styles';

const Feed = () => {
  const { posts } = useApplication();

  return (
    <Container>
      <SubTitle>Feed</SubTitle>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          URLImage={post.URLImage}
        />
      ))}
    </Container>
  );
};

export default Feed;
