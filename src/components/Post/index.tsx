import { PostsType } from '../../context/Application';

import {
  CloseIcon,
  Container,
  ImagePost,
  MessagePost,
  TextSendTo,
  Username,
  WrapperContent,
  WrapperHeader,
  WrapperImage,
} from './styles';

const Post = ({ name, message, URLImage }: PostsType) => {
  return (
    <Container>
      <WrapperHeader>
        <CloseIcon />
      </WrapperHeader>
      <WrapperContent>
        <WrapperImage>
          <ImagePost src={URLImage} alt={name} />
        </WrapperImage>

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
