import { InputStyle } from "./input.style";

const Input = ({ value, isActive, onChange }) => {
  return <InputStyle type="text" name="title" value={value} disabled={!isActive} />;
};

export { Input };
