import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faSquareInstagram, faSquareWhatsapp, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";


function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://github.com/EliFromTheNorth"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="icon" />
      </a>


      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareInstagram} className="icon" />
      </a>


      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareWhatsapp} className="icon" />
      </a>


      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
      </a>
    </div>
  )
}


export default SocialMedia
