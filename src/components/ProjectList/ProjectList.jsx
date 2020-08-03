import React, {useState, useContext} from 'react'
import styles from "./ProjectList.module.css";
import {GlobalState} from "../../store/GlobalState";

function ProjectList() {
    
    return (
        <div className = {styles.projectList}>
            Project List here.
        </div>
    )
}

export default ProjectList;