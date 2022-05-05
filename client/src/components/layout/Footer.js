import React from 'react'
import { 
    AiFillFacebook,
    AiFillLinkedin,
    AiFillGithub,
} from 'react-icons/ai';

function Footer() {
  return (
    <div className="footer">
        <ul>
            <li>
                <a 
                    href="https://www.linkedin.com/in/vittorio-costa-9689071b8/?original_referer="
                    target="_blank" 
                    rel="noopener noreferrer"
                ><AiFillLinkedin />
                </a>
            </li>
            <li>
                <a 
                    href="https://github.com/VittorioCosta"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <AiFillGithub />
                </a>
            </li> 
            <li>
                <a 
                    href="https://www.facebook.com/vittorio.costa.71465"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <AiFillFacebook />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer