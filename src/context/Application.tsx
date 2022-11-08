import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

export interface PostsType {
  id: string;
  name: string;
  message: string;
  URLImage: string;
}

interface PropsApplicationContext {
  posts: PostsType[];
  removePost: (idPost: string) => void;
  addPost: (postData: PostsType) => void;
}

const ApplicationContext = createContext<PropsApplicationContext>({
  posts: [],
  removePost: () => {},
  addPost: () => {},
});

const ApplicationProvider: FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<PostsType[]>([]);

  const removePost = (idPost: String) => {
    const filteredTodo = posts.filter(({ id }) => idPost !== id);
    setPosts(filteredTodo);
  };

  const addPost = (postData: PostsType) => {
    setPosts([...posts, postData]);
  };

  return (
    <ApplicationContext.Provider value={{ posts, removePost, addPost }}>
      {children}
    </ApplicationContext.Provider>
  );
};

const useApplication = () => {
  const context = useContext(ApplicationContext);

  return context;
};

export { ApplicationProvider, useApplication, ApplicationContext };
