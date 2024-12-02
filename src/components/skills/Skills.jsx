import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Mobile from './Mobile';
import Backend from './Backend';
import SoftSkills from './SoftSkills';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My tecnical level</span>
        
        <div className="skills__container container grid">
            <Frontend />
            <Mobile />
            <Backend />
            <SoftSkills />
        </div>
    </section>
  )
}

export default Skills