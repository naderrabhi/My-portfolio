import React from 'react'
import './myprojects.css'
import image1 from '../../assets/project/1.png'
import { Link } from 'react-router-dom'

const MyProjects = () => {
  return (
    
        <div className='app___project section__padding'>
        <h1>My Latest Project</h1>
        <div className="app__project-list">
        <Link to='my-projects/project1'>
            <div className="app__project-list_card">
                <div className="app__card-img">
                    <img src={image1} alt="img" />
                </div>
                <div className="app__card-text">
                    <p>Lawyers Appointment, MERN APPLICATION GO MY CODE JUN 2022 – DEC 2022</p>
                    <p>React, Bootstrap, Redux, Node, MongoDB </p>
                </div>
            </div>
        </Link>
        </div>
    </div>
    
  )
}

export default MyProjects