
import styles from './ProjectPage.module.css'
import React from 'react';
import ProjectCard from "@/components/assets/ProjectCard/ProjectCard";
import {IProject} from "@/types/project.interface";
import VideoPlayer from "@/modal/VideoPlayer/VideoPlayer";

const ProjectPage = () => {
    const projectsInfo:IProject[] = [
        {
            title: 'Готовить? Легко!',
            description:
                'Веб приложение помогает пользователям находить рецепты блюд, ' +
                'просматривать описание приготовления и автоматически рассчитывать количество ингредиентов ' +
                'в зависимости от выбранного количества порций. Все блюда разделены на категории: первые блюда, вторые блюда и десерты. ' +
                'Пользователь может пользоваться приложением как на телефоне, так и на компьютере, за счет технологии PWA.',
            imageUrl: 'cookEasy'
        },
    ]
    return (
        <div className={styles.project_page}>

            {
                projectsInfo.map((project, index) =>
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                )
            }
        </div>
    )
};

export default ProjectPage;