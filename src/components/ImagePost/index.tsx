import { WrapperImage, Image } from './styles';

interface ImageProps {
  URLImage: string;
  name: string;
}

const ImagePost = ({ URLImage, name }: ImageProps) => {
  return (
    <WrapperImage>
      <Image src={URLImage} alt={name} />
    </WrapperImage>
  );
};

export default ImagePost;
