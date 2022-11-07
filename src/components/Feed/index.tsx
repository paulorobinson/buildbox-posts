import React from 'react';
import Post from '../Post';
import { Container, SubTitle } from './styles';

const Feed = () => {
  return (
    <Container>
      <SubTitle>Feed</SubTitle>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
