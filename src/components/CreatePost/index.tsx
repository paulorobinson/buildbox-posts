import {
  Container,
  InputText,
  InputTextarea,
  InputUploadFile,
  ResetButton,
  SubmitButton,
  WrapperFooterButtons,
} from './styles';

import { IoImageOutline } from 'react-icons/io5';

const CreatePost = () => {
  return (
    <Container>
      <InputUploadFile htmlFor="uploadImage">
        <IoImageOutline size="100%" />
        <input
          id="uploadImage"
          name="uploadImage"
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
      </InputUploadFile>

      <InputText type="text" name="name" placeholder="Digite seu nome" />
      <InputTextarea name="message" placeholder="Mensagem" rows={5} />

      <WrapperFooterButtons>
        <ResetButton type="reset">Descartar</ResetButton>
        <SubmitButton disabled={false} type="submit">
          Publicar
        </SubmitButton>
      </WrapperFooterButtons>
    </Container>
  );
};

export default CreatePost;
