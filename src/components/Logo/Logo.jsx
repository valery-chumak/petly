import { StyledImg, StyledImgContainer, Link } from './Logo.styled';
import logo from '../../img/logo.png';

export default function Logo() {
  return (
    <StyledImgContainer>
      <Link href="/petly">
        <StyledImg src={logo} alt="logo" />
      </Link>
    </StyledImgContainer>
  );
}
