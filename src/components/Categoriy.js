import styled from "styled-components";
import Categories from "../components/Categories";
import { Container } from "../GlobalStyles";
import Description from "./Description";
import Title from "./Title";

export default function Category({ children }) {
  return (
    <CategoryArea>
      <Container>
        <SectionContent>
          <Title children="Olla helps you to spruk your product’s features." />
          <Description children="Combine sections from Olla's vast component library and create beautiful." />
        </SectionContent>
        <Categories />
      </Container>
    </CategoryArea>
  );
}

const CategoryArea = styled.section`
  padding: 60px 0;
`;

const SectionContent = styled.div`
  padding: 15px 30px;
  text-align: center;
`;
