import { styled } from "styled-components";
import { Input } from "../../atom/Input/Input";
import { UpdateIcon } from "../../atom/Icon/Icon";

const ItemFiled = () => {
  return (
    <ItemFieldStyle>
      <Input />
      <UpdateIcon />
    </ItemFieldStyle>
  );
};

const ItemFieldStyle = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1.5px solid #eee;
  border-radius: 3px;
  background: #fff;
  box-sizing: border-box;
`;

export { ItemFiled };
