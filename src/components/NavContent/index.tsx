const navOptions = ['Sobre', 'Habilidades', 'Projetos', 'Contato'];
const navDirect = ['#about', '#experience', '#projects', '#contact'];

function NavContent() {
  return (
    <ul className="nav-links">
      {
      navOptions.map((item, index) => (
        <li key={ item }><a href={ navDirect[index] }>{item}</a></li>
      ))
    }
    </ul>
  );
}

export default NavContent;
