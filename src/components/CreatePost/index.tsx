import { ChangeEvent, FormEvent, useState, useRef } from 'react';
import {
  Container,
  ImageIcon,
  InputText,
  InputTextarea,
  InputUploadFile,
  ResetButton,
  SubmitButton,
  WrapperFooterButtons,
} from './styles';

import { v4 as uuidv4 } from 'uuid';
import { useApplication } from '../../context/Application';
import ImagePost from '../ImagePost';

const CreatePost = () => {
  const { addPost } = useApplication();

  const formRef = useRef<HTMLFormElement>(null);

  const INITIAL_STATE = {
    name: '',
    message: '',
    URLImage: '',
  };
  const [inputs, setInputs] = useState(INITIAL_STATE);

  const checkEmptyFields = Object.values(inputs).some((input) => input === '');

  const loadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      setInputs({ ...inputs, URLImage: e.target?.result } as any);
    };
    reader.readAsDataURL(file as any);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const postData = { ...inputs, id: uuidv4() };

    addPost(postData);

    setInputs(INITIAL_STATE);
    formRef?.current?.reset();
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <InputUploadFile htmlFor="uploadImage">
        {inputs.URLImage ? (
          <ImagePost URLImage={inputs.URLImage} name={inputs.name} />
        ) : (
          <ImageIcon size="100%" />
        )}

        <input
          id="uploadImage"
          name="uploadImage"
          type="file"
          accept="image/png, image/jpg, image/gif, image/jpeg"
          onChange={(e) => loadFile(e)}
        />
      </InputUploadFile>

      <InputText
        type="text"
        name="name"
        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        value={inputs.name}
        placeholder="Digite seu nome"
      />
      <InputTextarea
        name="message"
        onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
        placeholder="Mensagem"
        value={inputs.message}
        rows={5}
      />

      <WrapperFooterButtons>
        <ResetButton type="reset">Descartar</ResetButton>
        <SubmitButton disabled={checkEmptyFields} type="submit">
          Publicar
        </SubmitButton>
      </WrapperFooterButtons>
    </Container>
  );
};

export default CreatePost;
