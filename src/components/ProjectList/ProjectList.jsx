import React, {useState, useContext} from 'react'
import styles from "./ProjectList.module.css";
import {GlobalContext} from "../../store/GlobalState";
import {Project} from "../";

function ProjectList() {
    
const {projects} = useContext(GlobalContext);    


    return (
        <div className = {styles.projectList}>
            {projects.map((project, index)=> (
                <Project key={index} project={project} />
            ))}
        </div>
    )
}

export default ProjectList;