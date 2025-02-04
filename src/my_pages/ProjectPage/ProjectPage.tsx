
import styles from './ProjectPage.module.css'
import React from 'react';
import ProjectCard from "@/components/assets/ProjectCard/ProjectCard";
import {IProject} from "@/types/project.interface";
import VideoPlayer from "@/modal/VideoPlayerModal/VideoPlayerModal";

const ProjectPage = () => {
    const projectsInfo:IProject[] = [
        {
            title: 'Мобильное приложение кондитерской',
            description:
                'Мобильное приложение которое включает в себя: основноый экран со всеми товарами кондитерской' +
                ', каталог, корзину с возможностью оформления заказа и профиль. Подробнее про каждый пункт - ' +
                'на главном экране можно добавить товар в корзину, изменить его количество или добавить в избранные.' +
                'В корзине осуществляется подсчет как отдельного элемента, так и всей корзины. В окне заказа осуществляется способ доставки' +
                ' с интеграцией яндекс карт. Присутствует система лояльности - бонусы и промокоды. Профиль в свою очередь содержит все возможные статистики - ' +
                'последние заказы, избранные, последние адреса, уровень профиля и многое другое.',
            imageUrl: 'bomarshe',
            videoUrl: 'https://youtu.be/7mwIbArRQxM'
        },
        {
            title: 'Готовить? Легко!',
            description:
                'Веб приложение помогает пользователям находить рецепты блюд, ' +
                'просматривать описание приготовления и автоматически рассчитывать количество ингредиентов ' +
                'в зависимости от выбранного количества порций. Все блюда разделены на категории: первые блюда, вторые блюда и десерты. ' +
                'Пользователь может пользоваться приложением как на телефоне, так и на компьютере, за счет технологии PWA.',
            imageUrl: 'cookEasy',
            videoUrl: 'https://youtu.be/DursA8-859o'
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
                        videoUrl={project.videoUrl}
                    />
                )
            }
        </div>
    )
};

export default ProjectPage;