import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
background-color: ${(props) => props.bgColor}; // props를 전달받는 함수
width: 100px;
height: 100px;
`;

const Circle = styled(Box)` // 확장가능성(Configurable). Box의 props를 그대로 가져오면서 백틱 안의 prop을 추가한다.
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor = "teal" />
      <Circle bgColor = "tomato" />
    </Father>
  );
}

export default App;
