import React from "react"


function Button(props) {
  return(
    <a href={props.adress} target='blank' className={`button ${props.className}`}> <div className='contact-icon'>{props.icon}</div> {props.name}</a>
  )
}


export default Button
