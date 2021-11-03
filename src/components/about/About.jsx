import './about.css'
import React from 'react'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="./img/peep-73.png"
                alt=""
                className="a-img" 
                />
            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                "Human beings cannot live on technology alone"
                </p>
                <p className="a-desc">
                I am Challa Bhargav Krishna Yadav, a second-year UG student pursuing my bachelor's in Electrical and Electronics Engineering
                  at Visvesvaraya National Institute of Technology, Nagpur. I'm a Frontend Developer. I love open-source and I believe in the power of community. Trying to explore life in all directions.
                </p>
            </div>
            
        </div>
    )
}

export default About
