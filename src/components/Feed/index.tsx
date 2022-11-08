import Post from '../Post';
import { useApplication } from '../../context/Application';
import { Container, SubTitle } from './styles';

const Feed = () => {
  const { posts } = useApplication();

  return (
    <Container>
      {posts.length !== 0 && <SubTitle>Feed</SubTitle>}
      {posts.slice(0).reverse().map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          message={post.message}
          URLImage={post.URLImage}
        />
      ))}
    </Container>
  );
};

export default Feed;
