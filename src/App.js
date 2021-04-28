import styled from "styled-components";

const Container = styled.div`
  text-aligned: center;
  margin: 5px;
`;

const Heading = styled.div`
  /* color: red; */
  /* font-weight: bolder; */
  display: flex;
  background-color: blue;
  color: white;
  
  font-family: sans-serif;
  padding: 1rem 2rem;
}
`;

const Paragraph = styled.div`
  font-size: 44px;
`;

const Button = styled.button`
  color: red;
  background-color: blue
`;

export default function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  }
  return (
    <Container>
      <Heading>Heading</Heading>
      <Paragraph>Hello World</Paragraph>
      <Button onClick={handleClick}>Click me</Button>
    </Container>
  );
}
