import styled from "styled-components";
import { aboutTexts } from "../data";

export default function AboutDetails() {
  return (
    <>
      {aboutTexts.map(({ id, title, description, border }) => {
        return (
          <SingleText key={id} border>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </SingleText>
        );
      })}
    </>
  );
}

const SingleText = styled.div`
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: ${({ border }) => (border ? "1px solid #dbdee9" : "")};
`;

const Title = styled.h5`
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 16px;
  font-weight: 600;
  color: #041735;
`;

const Description = styled.p`
  font-size: 17px;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #5c6168;
`;
