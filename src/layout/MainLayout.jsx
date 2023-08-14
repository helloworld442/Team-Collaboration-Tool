import { styled } from "styled-components";

export const MainLayout = styled.div`
  width: 1200px;
  height: 800px;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: ${(props) => props.theme.baseColor};
`;
