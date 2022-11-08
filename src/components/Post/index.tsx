import { PostsType, useApplication } from '../../context/Application';
import ImagePost from '../ImagePost';

import {
  CloseIcon,
  Container,
  MessagePost,
  TextSendTo,
  Username,
  WrapperContent,
  WrapperHeader,
} from './styles';

const Post = ({ id, name, message, URLImage }: PostsType) => {
  const { removePost } = useApplication();
  return (
    <Container>
      <WrapperHeader>
        <CloseIcon onClick={() => removePost(id)} />
      </WrapperHeader>
      <WrapperContent>
        <ImagePost URLImage={URLImage} name={name} />

        <section>
          <MessagePost>{message}</MessagePost>

          <TextSendTo>Enviado por:</TextSendTo>
          <Username>{name}</Username>
        </section>
      </WrapperContent>
    </Container>
  );
};

export default Post;
