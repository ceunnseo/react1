import React from 'react'
import StartBtn from './StartBtn'


const Intro = ({setFlag, flag, setTryCnt, setWinCnt, setResult}) => { 
  return (
    <div className = "intro">
      <h1>농담곰을 이겨라!</h1>
      <div className = "introImage"></div>
      <StartBtn setFlag = {setFlag} flag = {flag} setTryCnt = {setTryCnt} setWinCnt={setWinCnt} setResult = {setResult}></StartBtn>
    </div>
  )
}

export default Intro
