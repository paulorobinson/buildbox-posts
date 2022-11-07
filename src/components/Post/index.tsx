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
const Post = () => {
  return (
    <Container>
      <WrapperHeader>
        <CloseIcon />
      </WrapperHeader>
      <WrapperContent>
        <WrapperImage>
          <ImagePost
            src="http://github.com/paulorobinson.png"
            width={100}
            alt="image"
          />
        </WrapperImage>

        <section>
          <MessagePost>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, fuga. Cupiditate, veniam architecto consequatur porro
            autem consequuntur nobis nesciunt tempora explicabo voluptatum vel
            maxime, blanditiis labore pariatur minima nemo natus.
          </MessagePost>

          <TextSendTo>Enviado por:</TextSendTo>
          <Username>Paulo Robinson</Username>
        </section>
      </WrapperContent>
    </Container>
  );
};

export default Post;
