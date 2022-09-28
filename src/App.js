import styled, {keyframes} from "styled-components";

const roatatiomAnimation = keyframes` // keyframes 함수
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${roatatiomAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span { // styled-components가 아니지만 Box 내부에 있는 태그를 호출 가능하다.
    font-size: 50px;
    &:hover { // pseudo selector. span:hover과 동일한 문법.
      font-size: 100px;}
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}

export default App;
