import { useState } from "react";
import Box from './component/Box'
import Intro from './component/Intro'
import End from './component/End'
import "./App.css"

const choice = {
  rock : {
    name : "Rock",
    img : './img/gom-rock.jpg'
  },
  scissors : {
    name : "Scissors",
    img : './img/gom-scissors.jpg'
  },
  paper : {
    name : "Paper",
    img : './img/gom-paper.jpg'
  },
}

const gameCnt = 10;
function App() {
  const [userSelect, setUserSelect] = useState(null) //내가 선택한 가위, 바위, 보에 대한 값을 담는 userSelect
  const [computerSelect, setComputerSelect] = useState(null) //랜덤 가위, 바위, 보에 대한 값을 담은 computerSelect
  const [result, setResult] = useState("are you ready?"); //게임의 결과를 담는 result
  const [tryCnt, setTryCnt] = useState(0);
  const [winCnt, setWinCnt] = useState(0);
  const [flag, setFlag] = useState(true); //true이면 게임 시작 전 상태, false이면 게임중인 상태, 게임이 끝나면 true로 변경된다. 
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setTryCnt(tryCnt+1);
    judgement(choice[userChoice],computerChoice); //나의 값과 컴퓨터의 값을 object 형태로 전달
  };
  const reset = () => {
    setWinCnt(0)
    setTryCnt(0)
    setResult("are you ready?");
    setUserSelect(null);
    setComputerSelect(null);
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      setResult("Tie")
    }
    else if (user.name === "Rock") {
      setResult(computer.name === "Scissors" ? "Win" : "Lose")
      if (computer.name === "Scissors") {
        setWinCnt(winCnt+1)
      }
    }
    else if (user.name === "Scissors") {
      setResult(computer.name === "Paper" ? "Win" : "Lose")
      if (computer.name === "Paper") {
        setWinCnt(winCnt+1)
      }
    }
    else if (user.name === "Paper") {
      setResult(computer.name === "Rock" ? "Win" : "Lose")
      if (computer.name === "Rock") {
        setWinCnt(winCnt+1)
      }
    }
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    //객체의 key값만 뽑아 array로 만들어주는 object.keys 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }
  return (
  <div>
    {flag ? 
      <Intro setFlag = {setFlag} flag = {flag} setTryCnt = {setTryCnt} setWinCnt = {setWinCnt} setResult = {setResult}></Intro>
     : 
    (tryCnt < gameCnt ? <div>
      <div className = "main">
        <Box title="you" item = {userSelect} result = {result}/>
        <div id = "vs">⚡</div>
        <Box title="NONGDAMGOM" item = {computerSelect} result = {result === "are you ready?" ? "are you ready?" : (result === "Tie" ? "Tie" : (result === "Win" ? "Lose" : "Win")) }/>
      </div>
      <div className = "main btnMain">
          <button onClick={() => play("scissors")}>✌️</button>
          <button onClick={() => play("rock")}>✊</button>
          <button onClick={() => play("paper")}>✋</button>
          <button onClick={() => reset()}>🔄️</button>
          <div>이긴 횟수 : {winCnt} / 시도횟수 : {tryCnt}</div>
      </div>
    </div> : 
    <End result = {winCnt} 
                  setFlag = {setFlag} 
                  flag = {flag} 
                  setWinCnt = {setWinCnt}
                  setTryCnt = {setTryCnt}
                  setResult = {setResult}
                  gameCnt = {gameCnt}
             >끝</End>)
    }

    
  </div>);
}

export default App; 