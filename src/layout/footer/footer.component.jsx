import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  HomeOutlined,
  LineChartOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FooterNav, FooterLink } from "./footer.style";

const Footer = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    switch (pathname) {
      case "/":
        return setActive(0);
      case "/write":
        return setActive(1);
      case "/chart":
        return setActive(2);
      case "/login":
        return setActive(3);
      case "/register":
        return setActive(3);
    }
  }, []);

  return (
    <FooterNav>
      <FooterLink to="/" data-testid="home">
        <HomeOutlined className={active === 0 ? "active" : ""} />
      </FooterLink>
      <FooterLink to="/write" data-testid="write">
        <PlusOutlined className={active === 1 ? "active" : ""} />
      </FooterLink>
      <FooterLink to="/chart" data-testid="chart">
        <LineChartOutlined className={active === 2 ? "active" : ""} />
      </FooterLink>
      <FooterLink to="/login" data-testid="login">
        <UserOutlined className={active === 3 ? "active" : ""} />
      </FooterLink>
    </FooterNav>
  );
};

export default Footer;
