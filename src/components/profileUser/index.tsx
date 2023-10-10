type PropsTypes = {
  name:string;
  avatar_url:string;
  bio:string;
  blog: string;
  html_url:string;
};

function ProfileUser({ name, avatar_url, bio, blog, html_url }:PropsTypes) {
  console.log(blog);
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={ avatar_url } alt="Joao_Neto_profile_picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Olá eu sou...</p>
        <h1 className="title">{name}</h1>
        <p className="section__text__p2">{ bio }</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={ () => window.open('/curriculon_joaoNeto.pdf') }
          >
            Download CV
          </button>
          <a
            className="btn btn-color-1"
            href="./#contact"
          >
            Contate-me
          </a>
        </div>
        <div id="socials-container">
          <a href={ blog } target="_blank" rel="noreferrer">
            <img
              src="/linkedin.png"
              alt="My LinkedIn_profile"
              className="icon"
            />
          </a>
          <a href={ html_url } target="_blank" rel="noreferrer">
            <img
              src="/github.png"
              alt="My Github_profile"
              className="icon"
            />
          </a>

        </div>

      </div>
    </section>

  );
}

export default ProfileUser;
