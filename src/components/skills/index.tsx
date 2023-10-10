import { backEndStacks, frontEndStacks } from '../../utils/myStacks';

function Skills() {
  return (
    <section id="experience">
      <p className="section__text__p1">Conheça Minhas</p>
      <h1 className="title">Habilidades</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Front-End</h2>
            <div className="article-container">
              {
                frontEndStacks.map((stacks) => (
                  <article key={ stacks.stack }>
                    <img
                      src="/checkmark.png"
                      alt="Experience_icon"
                      className="icon"
                    />
                    <div>
                      <h3>{ stacks.stack }</h3>
                      <p>{ stacks.nivel }</p>
                    </div>
                  </article>
                ))
              }
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Back-End</h2>
            <div className="article-container">
              {
                backEndStacks.map((stacks) => (
                  <article key={ stacks.stack }>
                    <img
                      src="/checkmark.png"
                      alt="Experience_icon"
                      className="icon"
                    />
                    <div>
                      <h3>{ stacks.stack }</h3>
                      <p>{ stacks.nivel }</p>
                    </div>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <a href="./#projects">
        <img
          src="/arrow.png"
          alt="Arrow_icon"
          className="icon arrow"
        />
      </a>
    </section>
  );
}

export default Skills;
