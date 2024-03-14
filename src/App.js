import Box from './component/Box'
import './App.css'

/* 가위 바위 보 게임
1. 박스 두 개를 그린다. (타이틀, 사진, 결과값) 
2. 가위 바위 보 버튼이 있다.
3. 버튼을 클릭하면 게임이 시작된다.
4. 컴퓨터의 값은 렌덤하게 선택이 되어야 한다.
5. 3번과 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
6. 승패 결과에 따라 테두리의 색상이 바뀐다.*/
function App() {
  return (
    <div className = "app">
      <Box />
      <Box />
    </div>
  );
}

export default App;
