import { createContext, FC, ReactNode, useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface Props {
  children: ReactNode;
}

export interface PostsType {
  id?: string;
  name: string;
  message: string;
  URLImage: string;
}

interface PropsApplicationContext {
  posts: PostsType[];
}

const ApplicationContext = createContext<PropsApplicationContext>({
  posts: [],
});

const ApplicationProvider: FC<Props> = ({ children }) => {
  const INITIAL_STATE = [
    {
      id: uuidv4(),
      name: 'Paulo',
      message: 'lorem ipsum dolor sit am 1',
      URLImage: 'https://github.com/paulorobinson.png',
    },
    {
      id: uuidv4(),
      name: 'Robinson',
      message: 'lorem ipsum dolor sit am 2',
      URLImage: 'https://github.com/paulorobinson.png',
    },
    {
      id: uuidv4(),
      name: 'Giaciani',
      message: 'lorem ipsum dolor sit am 3',
      URLImage: 'https://github.com/paulorobinson.png',
    },
  ];

  const [posts, setPosts] = useState<PostsType[]>(INITIAL_STATE);

  return (
    <ApplicationContext.Provider value={{ posts }}>
      {children}
    </ApplicationContext.Provider>
  );
};

const useApplication = () => {
  const context = useContext(ApplicationContext);

  return context;
};

export { ApplicationProvider, useApplication, ApplicationContext };
