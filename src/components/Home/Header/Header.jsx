import {
  Create,
  Inbox,
  Likes,
  Logo
} from './atoms';

const Header = () => {
  return (
    <navbar>
      <Logo />
      <Create />
      <Likes />
      <Inbox />
    </navbar>
  );
}

export default Header;