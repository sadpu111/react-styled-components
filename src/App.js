import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({required: true, minLength:10})`
  background-color: blue;
`;

// as="a" 라는 prop을 추가함으로써 Btn의 button태그를 a태그로 변환한다. 즉, styled.a``; 로 변환하는 것.  

function App() {
  return (
    <Father>
      <Btn>Log In</Btn>
      <Btn as="a">Log In</Btn> 
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
