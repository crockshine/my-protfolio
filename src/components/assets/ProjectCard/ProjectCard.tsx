import styles from './ProjectCard.module.css'
import React from "react";
import {IProject} from "@/types/project.interface";
import VideoPlayer from "@/components/assets/VideoPlayer/VideoPlayer";

const ProjectCard: React.FC<IProject> = ({title, description, imageUrl}) => {
    return (
        <div className={styles.project_card}>
            <VideoPlayer
                    imageUrl={`/${imageUrl}.webp`}
                    videoUrl={'https://youtu.be/Ps5VZeJ5ifU'}
            />

            <div className={styles.description_block}>
                <h2>{title}</h2>
                <h3>
                    {description}
                </h3>
            </div>
        </div>
    )
}


export default ProjectCard;