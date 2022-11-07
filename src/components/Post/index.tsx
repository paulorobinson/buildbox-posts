import { PostsType, useApplication } from '../../context/Application';

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

const Post = ({ id, name, message, URLImage }: PostsType) => {
  const { removePost } = useApplication();
  return (
    <Container>
      <WrapperHeader>
        <CloseIcon onClick={() => removePost(id)} />
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
