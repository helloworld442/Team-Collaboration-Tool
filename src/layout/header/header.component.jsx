import { useNavigate } from "react-router-dom";
import { HeaderNav, HeaderNavText } from "./header.style";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";

const Header = () => {
  const navigateTo = useNavigate();

  const goBackButton = () => navigateTo(-1);

  const goHomeButton = () => navigateTo("/");

  return (
    <HeaderNav>
      <HeaderNavText data-testid="left" onClick={goBackButton}>
        <LeftOutlined />
      </HeaderNavText>
      <HeaderNavText data-testid="right" onClick={goHomeButton}>
        <HomeOutlined />
      </HeaderNavText>
    </HeaderNav>
  );
};

export default Header;
