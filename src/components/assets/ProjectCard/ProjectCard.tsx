'use client'
import styles from './ProjectCard.module.css'
import React from "react";
import {IProject} from "@/types/project.interface";
import Image from 'next/image'
import RotatePlayText from "@/components/assets/RotatePlayText/RotatePlayText";
import {useModal} from "@/context/modal.context";
import {ModalList} from "@/types/modal";
import Accordion from "@/components/assets/Accordion/Accordion";
import LinkBadge from "@/components/assets/LinkBadge/LinkBadge";

const ProjectCard: React.FC<IProject> = ({
                                             title,
                                             description,
                                             imageUrl,
                                             videoUrl,
    links
}) => {
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
                <div className={styles.links_container}>
                    {links?.map((link, idx) => (
                        <LinkBadge
                            key={idx}
                            link={link.link}
                            title={link.title}
                            color={link.color}
                        />
                    ))}
                </div>


                <div className={'flex-1'}/>
                <Accordion description={description}/>
            </div>
        </div>
    )
}


export default ProjectCard;