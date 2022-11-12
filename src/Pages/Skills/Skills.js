import React from 'react'
import ProgressLine from '../../Components/ProgressLine/ProgressLine'
import './Skills.css'
import {FaJs,FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaNodeJs} from 'react-icons/fa'

const Skills = () => {
  const Frontend = [
    {
      label : "HTML5",
      icon : <FaHtml5 />,
      percentage : "95%",
      color : "red"
    },
    {
      label : "CSS3",
      icon : <FaCss3Alt />,
      percentage : "89%",
      color : "orange"
    },
    {
      label : "Javascript",
      icon : <FaJs />,
      percentage : "88%",
      color : "yellow"
    },
    {
      label : "React JS",
      icon : <FaReact />,
      percentage : "84%",
      color : "blue"
    },
    {
      label : "Bootstrap",
      icon : <FaBootstrap />,
      percentage : "85%",
      color : "blue"
    }
  ]

  const Backend = [
    {
      label : "Node JS",
      percentage : "88%",
      color : "black"
    },
    {
      label : "Express",
      percentage : "92%",
      color : "blue"
    },
    {
      label : "Mongoose",
      percentage : "89%",
      color : "yellow"
    },
    {
      label : "Mongo DB",
      percentage : "95%",
      color : "orange"
    }
  ]
  return (
    <div className='container' id='skills'>
      <div className="row skills">
        <div className="col-md-6 skills--frontend">
          <div className="card">
            <div className="card--header">
              <p>Front End</p>
            </div>
            <div className="card--body">
              {Frontend.map(front => (
                <ProgressLine
                label= {front.label}
                visualParts={[
                  {
                    percentage: front.percentage,
                    color: front.color
                  }
                ]}
              />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 skills--backend">
          <div className="card">
            <div className="card--header">
            <p>Back End</p>
            </div>
            <div className="card--body">
            {Backend.map(back => (
                <ProgressLine
                label= {back.label}
                visualParts={[
                  {
                    percentage: back.percentage,
                    color: back.color
                  }
                ]}
              />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills