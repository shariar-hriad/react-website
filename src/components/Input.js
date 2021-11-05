import styled from "styled-components";

export default function Input({ ...rest }) {
  return <InputStyled {...rest} />;
}

const InputStyled = styled.input`
  color: #041735;
  font-size: 18px;
  font-weight: 400;
  padding: 24px 35px;
  background: none;
  outline: none;
  border: none;

  &:focus {
    outline: none;
  }
`;
