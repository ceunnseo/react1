import React from 'react'
import StartBtn from './StartBtn'

const End = ( {result, setFlag, flag, setTryCnt, setWinCnt, setResult, gameCnt } ) => {
  return (
    <div className='end'>
        {result < 5 && 
        <div className = "end">
            <h2>{result} : {gameCnt}! 이런, 당신은 농담곰에게 졌습니다.</h2>
            <img src = './img/gom-win.jpg'></img>
        </div>}
        {result >=5 &&
        <div className = "end">
            <h2>{result} : {gameCnt}! 축하합니다, 당신은 농담곰을 이겼습니다!</h2>
            <img src = './img/gom-lose.jpeg'></img>
        </div>
        }
        <StartBtn setFlag = {setFlag} flag = {flag} setTryCnt={setTryCnt} setWinCnt={setWinCnt} setResult={setResult} ></StartBtn>
    </div>
  )
}

export default End
