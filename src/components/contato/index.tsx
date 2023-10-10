type PropsTypes = {
  blog: string;
  company:string;
};

function Contato({ blog, company }:PropsTypes) {
  return (
    <section id="contact">
      <p className="section__text__p1">Fale comigo</p>
      <h1 className="title">Contato</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="src/assets/email.png"
            alt="Email_icon"
            className="icon contact-icon email-icon"
          />
          <p><a href={ `mailto:${company}` }>{company}</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="src/assets/linkedin.png"
            alt="LinkedIn_icon"
            className="icon contact-icon"
          />
          <p><a href={ blog }>Linkedin</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contato;
