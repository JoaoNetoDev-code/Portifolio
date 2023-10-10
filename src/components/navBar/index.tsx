type Props = {
  name:string;
};

function NavBar({ name }: Props) {
  return (
    <nav id="desktop-nav">
      <div className="logo">{name}</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
