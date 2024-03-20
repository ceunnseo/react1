import React from 'react'

const StartBtn = ({setFlag, flag, setTryCnt, setWinCnt, setResult}) => {
const start = () => { //버튼을 클릭하여 flag의 true, false 제어
    setFlag(flag ? false : true);
    setTryCnt(0);
    setWinCnt(0);
    setResult("are you ready?")
    } 
  return (
    <div>
      <button onClick = {() => start()}>가보자고</button>
    </div>
  )
}

export default StartBtn
