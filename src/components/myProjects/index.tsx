import { Repository } from '../../types';

type PropRepos = {
  repos:Repository[]
};

function MyProjects({ repos }:PropRepos) {
  const filterRepos = repos.filter((star) => star.stargazers_count > 0);

  const handleClickViwerPage = (link:string) => {
    window.open(link, '_brank');
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Veja meus</p>
      <h1 className="title">Projetos</h1>
      <div className="experience-details-container" />
      {
        filterRepos.slice(1, filterRepos.length).map((repo) => (
          <div key={ repo.id } className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="public\testProject.jpg"
                  alt={ repo.name }
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{repo.name}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={ () => handleClickViwerPage(repo.html_url) }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={ () => handleClickViwerPage(repo.homepage) }
                >
                  Deploy
                </button>
              </div>
            </div>
          </div>

        ))
      }
      <a href="./#contact">
        <img
          src="/arrow.png"
          alt="Arrow_icon"
          className="icon arrow"
        />
      </a>

    </section>
  );
}

export default MyProjects;
