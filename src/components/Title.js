import styled from "styled-components";

export default function Title({ children }) {
  return <SecTitle children={children} />;
}

export const SecTitle = styled.h1`
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;
  color: #041735;
  margin-bottom: 12px;
`;
