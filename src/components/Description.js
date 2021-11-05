import styled from "styled-components";

export default function Description({ children }) {
  return <SecSubTitle children={children} />;
}

export const SecSubTitle = styled.p`
  color: #656565;
  font-size: 18px;
  line-height: 1.5;
`;
