'use client'
import styles from './ProjectCard.module.css'
import React from "react";
import {IProject} from "@/types/project.interface";
import Image from 'next/image'
import RotatePlayText from "@/components/assets/RotatePlayText/RotatePlayText";
import {useModal} from "@/context/modal.context";
import {ModalList} from "@/types/modal";

const ProjectCard: React.FC<IProject> = ({title, description, imageUrl, videoUrl}) => {
    const modal = useModal()

    return (
        <div className={styles.project_card}  >

            <div className={styles.image_block} onClick={() => modal?.onOpen(ModalList.VIDEO, {imageUrl, videoUrl})}>
                <Image
                    src={`/${imageUrl}.webp`}
                    width={728}
                    height={381}
                    alt={'project'}
                />
                <RotatePlayText/>
            </div>

            <div className={styles.description}>
                <h2>{title}</h2>
                <h3>
                    {description}
                </h3>
            </div>
        </div>
    )
}


export default ProjectCard;