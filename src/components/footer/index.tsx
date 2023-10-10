import NavContent from '../NavContent';

type Props = {
  name:string;
};

function Footer({ name }:Props) {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <NavContent />
        </div>
      </nav>
      <p>{`Desenvolvido por ${name} &#169; 2023 Todos os direitos reservados.`}</p>
    </footer>
  );
}

export default Footer;
