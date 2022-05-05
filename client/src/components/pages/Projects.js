import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'

function Projects() {

  const[repo, setRepo] = useState([])
  

  const getDataFromGitHub = (user='VittorioCosta')=>{

    const apiUrl = `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc`
    try {

      fetch(apiUrl)
        .then(res => res.json())
        .then(res => {setRepo(res)})
        
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getDataFromGitHub()
  /* eslint-disable-next-line */
  },[])



  return (
    <div className="main">
      {repo.map((repo, n)=><Fragment key={repo.id}>
        
        <div className="div-grey">
          <h2 key={repo.id}>{repo.name}</h2>
        </div>
        
        <h5>Created: {repo.created_at} </h5>
        <h5>Updated: {repo.updated_at}</h5>
        <p>{repo.description}</p>

        <a href={repo.languages_url} target="_blank" rel="noopener noreferrer">
          Link to the languages ​​I use in this project.
        </a>
        <br />
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            Go to {repo.name} code on my GitHub profile.
        </a>

        <ul>
          <li>
            Stars: {repo.stargazers_count}
          </li>
          <li>
            Watchers: {repo.watchers_count}
          </li>
          <li>Forks: {repo.forks_count}</li>
        </ul>
        
        
        <br></br>
      </Fragment>
      )}
        
    </div>
  )
}

export default Projects