import styled, {keyframes} from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}; // index.js에서 <App>이 <ThemeProvider>안에 있으므로 호출 가능하다.
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;


function App() {
  return (
    <Wrapper>
      <Title>Hello!</Title>
    </Wrapper>
  );
}

export default App;
