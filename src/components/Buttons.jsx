import React from 'react'
import Button from './Button.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"




function Buttons() {
  return (
    <div className='buttons'>
      <Button className={"email"} adress={"mailto:e.knopkostkova@gmail.com"} name={"Email"} icon={<FontAwesomeIcon icon={faEnvelope} />} />

      <Button className={"linkedin"} adress={"http://www.linkedin.com/in/eliska-knop-kostkova"} name={"LinkedIn"} icon={<FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />}/>
    </div>
  )
}


export default Buttons
