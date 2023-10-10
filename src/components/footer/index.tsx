type Props = {
  name:string;
};

function Footer({ name }:Props) {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>
      <p>{`Desenvolvido por ${name} &#169; 2023 Todos os direitos reservados.`}</p>
    </footer>
  );
}

export default Footer;
