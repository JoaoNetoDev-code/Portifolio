import { useEffect, useState } from 'react';
import ProfileUser from './components/profileUser';
import Loading from './components/loading';
import NavBar from './components/navBar';
import GitHubUserType, { Repository } from './types';
import fetchApi, { fetchReposApi } from './utils/fetchapi';
import Skills from './components/skills';
import About from './components/aboutMe';
import Contato from './components/contato';
import MyProjects from './components/myProjects';
import './App.css';
import Footer from './components/footer';

function App() {
  const [user, setUser] = useState({} as GitHubUserType);
  const [useRepos, setUseRepos] = useState<Repository[]>([] as Repository[]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const requestDatas = async () => {
      setIsLoading(true);
      const dataUser = await fetchApi();
      const dataRepos = await fetchReposApi();
      setUseRepos(dataRepos);
      setUser(dataUser);
    };
    requestDatas();
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <NavBar name={ user.name } />
      <ProfileUser
        html_url={ user.html_url }
        blog={ user.blog }
        bio={ user.bio }
        avatar_url={ user.avatar_url }
        name={ user.name }
      />
      <About
        created_at={ user.created_at }
        avatar_url={ user.avatar_url }
      />
      <Skills />
      <MyProjects repos={ useRepos } />
      <Contato company={ user.company } blog={ user.blog } />
      <Footer name={ user.name } />
    </>
  );
}

export default App;
