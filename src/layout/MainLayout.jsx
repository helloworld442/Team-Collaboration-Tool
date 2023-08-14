import { styled } from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: ${(props) => props.theme.baseColor};
`;

export const MainRow = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
