import React from 'react'
import profileImg from '../../components/images/profileImage.jpg'
import Form from '../form/Form'
import bulb from '../images/bulb.png'
import { 
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail
} from 'react-icons/ai';


function Home() {
  return (
    <>
        <div className="main">
          <h2>DEVELOPMENT</h2>
          <div className="div-grey">
            <h5>What I usually do</h5>
          </div>
          <p>
            I create successful responsive websites that are fast, easy to use, 
            and built with best practices. The main area of my expertise is full-stack 
            development, HTML, CSS, js, building small and medium web apps.
            Well-organised person, problem solver, 
            independent employee with high attention to detail.
          </p>
          <br />

          <h2>SKILLS</h2>
          <div className="div-grey">
            <h5>How I use web technologies</h5>
          </div>
          <p>I use HTML & CSS and I try to keep up with 
            the latest features while maintaining graceful degradation.
            <br/>
            I use JavaScript fairly often, usually with ReactJS and Redux.
            My main server-side language is NODE, quite often paired 
            with MONGODB or POSTGRESQL.
            <br/>
            I use DOCKER for my database container and GIT 
            for all of my programming work,
            check out my GitHub page for random projects.
            <br/>
            I primarily use Visual Studio code editor on Linux Ubuntu.
          </p>
          <br />

          <h2>COURSE</h2>
          <div className="div-grey">
            <h5>Courses and qualifications I have taken</h5>
          </div>
          <br />
          <p>
            COURSE:
            <br/>
            HTML, CSS, JAVASCRIPT, JQUERY, PYTHON, PHP, C#, JAVA 
            on Codecarmy online platform courses.
            <br/>
            
            <br />
            QUALIFICATION:
            <br/>
            Career Path in Full-Stack Engineer on  Codecarmy online platform.
          </p>
          
          <img src={bulb} alt='bulb' />
          
          <h2>CONTACTS</h2>
          <div className="div-grey">
            <h5>Wherever you can reach me or contact me</h5>
          </div>
          <ul>
      
          <li>
            <div className='icons'><AiFillLinkedin /></div>
            <a 
              href="https://www.linkedin.com/in/vittorio-costa-9689071b8/?original_referer="
              target="_blank" 
              rel="noopener noreferrer"
            >Link to my Linkedin Home Page
            </a>
          </li>
          <li>
            <div className='icons'><AiFillGithub /></div>
            <a 
              href="https://github.com/VittorioCosta"
              target="_blank" 
              rel="noopener noreferrer"
            >Link to my GitHub
            </a>
          </li> 
          <li>
            <div className='icons'><AiFillFacebook /></div>
            <a 
              href="https://www.facebook.com/vittorio.costa.71465"
              target="_blank" 
              rel="noopener noreferrer"
              >Link to Facebook
            </a>
          </li>
          <li>
            <div className='icons'><AiFillMail /></div>
            Email: vitech321@gmail.com
          </li> 

          
        </ul>
          
        </div>

        <div className="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="div-grey">
            <img className='div-grey' alt='profile img' src={profileImg} />
          </div>
          <p>Full stack web developer located in Scotland.</p>
          <br />
          <h3>Technical Skills</h3>
          <br />
          <div className="thechnical-skills">
            backend
            <div className='Bar'>
              <div className='Progress' style={{width:'80%'}}>80%</div>
            </div>
          </div>
          <br />
          <div className="thechnical-skills">
            frontend
            <div className='Bar'>
              <div className='Progress' style={{width:'80%'}}>80%</div>
            </div>
          </div>
          <Form />
          <br />
        </div>

        
    </>
  )
}

export default Home