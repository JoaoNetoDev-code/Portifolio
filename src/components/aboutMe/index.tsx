import calcDiffTime, { calcAge } from '../../utils/functionsAge';

type PropsTypes = {
  avatar_url:string;
  created_at:string;
};

function About({ avatar_url, created_at }:PropsTypes) {
  const birth = '1998-12-18';
  return (
    <section id="about">
      <p className="section__text__p1">Conheça mais</p>
      <h1 className="title">Sobre mim</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={ avatar_url } alt="Profile_picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {[{ icon: '/experience.png',
              title: 'Experiência',
              content: `meu primeiro contato com desenvolvimento foi a
              exatamente...\n${calcDiffTime(created_at)}` },
            { icon: '/education.png',
              title: 'Formação',
              content: `Desenvolvimento Web - Trybe
              \n Técnico em Administração - Grau Técnico` }]
              .map((item, index) => (
                <div className="details-container" key={ index }>
                  <img src={ item.icon } alt={ `${item.title} icon` } className="icon" />
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
          </div>
          <div className="text-container">
            <p>
              {
                `Olá, tudo bem? Pode me chamar de Neto, tenho 
                ${calcAge(birth)} anos e sou apaixonado
                por tecnologia e gestão desde criança.
                Sempre fui uma pessoa sincero e amigável,
                essas são as coisas que mais me definem, gosto de desafios e estou
                sempre buscando aprender coisas novas.`
              }
            </p>
          </div>
        </div>
      </div>
      <a href="./#experienc">
        <img src="/arrow.png" alt="Arrow icon" className="icon arrow" />
      </a>
    </section>

  );
}

export default About;
