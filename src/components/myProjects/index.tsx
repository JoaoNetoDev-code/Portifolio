import { Repository } from '../../types';

type PropRepos = {
  repos:Repository[]
};

function MyProjects({ repos }:PropRepos) {
  const filterRepos = repos.filter((star) => star.stargazers_count > 0);

  const handleClick = (link:string) => {
    window.location.href = link;
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
                  src="sas"
                  alt={ repo.name }
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{repo.name}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={ () => handleClick(repo.html_url) }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={ () => handleClick(repo.homepage) }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>

        ))
      }
      <a href="./#contact">
        <img
          src="src/assets/arrow.png"
          alt="Arrow_icon"
          className="icon arrow"
        />
      </a>

    </section>
  );
}

export default MyProjects;
