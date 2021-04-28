import "./styles.css";
import styled from "styled-components";

const Container = styled.div`
  text-aligned: center;
  margin: 5px;
`;

const Heading = styled.div`
  color: red;
  font-weight: bolder;
`;

const Paragraph = styled.div`
  font-size: 44px;
`;

export default function App() {
  return (
    <Container>
      <Heading>Hello CodeSandbox</Heading>
      <Paragraph>Start editing to see some magic happen!</Paragraph>
    </Container>
  );
}
