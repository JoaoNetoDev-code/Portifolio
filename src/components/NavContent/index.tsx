const navOptions = ['Sobre', 'Habilidades', 'Contato'];
const navDirect = ['#about', '#experience', '#contact'];

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
