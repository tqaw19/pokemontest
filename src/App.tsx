import emotionStyled from "@emotion/styled";
import "./App.css";
import { Button } from "@chakra-ui/react";

const AppButton = emotionStyled(Button)`
  padding: 2rem;
  
  &:hover {
    background: red;
  }

  font-size: 1.3rem;

  @media (max-width: 600px) {
  background: blue;
  }
`;

function App() {
  return (
    <>
      <h2>Home works!!</h2>
      <Button>Load More</Button>
      <AppButton>Something else</AppButton>
    </>
  );
}

export default App;
