import NavContent from '../NavContent';

type Props = {
  name:string;
};

function NavBar({ name }: Props) {
  return (
    <nav id="desktop-nav">
      <div className="logo">{name}</div>
      <div>
        <NavContent />
      </div>
    </nav>
  );
}

export default NavBar;
