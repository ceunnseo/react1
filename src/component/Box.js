import React from 'react'


const Box = (props) => {
  console.log("props", props)
  return (
    <div>
      {props.title === "NONGDAMGOM" ? 
      <div className = {`box ${props.result}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item===null ? './img/gom-ready.jpg' : props.item.img}/>
        <h2>{props.result}</h2>
       </div>
       :
       <div className = {`box ${props.result}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item===null ? './img/user-ready.jpeg' : props.item.img}/>
        <h2>{props.result}</h2>
       </div>}
    </div>
  )
}

export default Box
