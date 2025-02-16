
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
                'Мобильное приложение включает в себя: основной экран со всеми товарами кондитерской, каталог, корзину с возможностью оформления заказа и профиль. ' +
                'Подробнее о каждом разделе. На главном экране можно добавить товар в корзину, изменить его количество или добавить в избранное. ' +
                'В корзине автоматически подсчитывается стоимость как отдельных товаров, так и всей корзины. ' +
                'В окне оформления заказа можно выбрать способ доставки с интеграцией Яндекс.Карт. ' +
                'Приложение поддерживает систему лояльности — бонусы и промокоды. ' +
                'В профиле отображается статистика: последние заказы, избранные товары, последние использованные адреса, уровень профиля и многое другое.',
            imageUrl: 'bomarshe',
            videoUrl: 'https://rutube.ru/play/embed/97555508c25263f77a66015d71e2282a'
        },
        {
            title: 'Готовить? Легко!',
            description:
                'Веб-приложение помогает пользователям находить рецепты блюд, просматривать инструкции по приготовлению и автоматически рассчитывать количество ингредиентов в зависимости от выбранного числа порций. ' +
                'Все рецепты разделены на категории: первые блюда, вторые блюда и десерты. ' +
                'Приложение доступно как на телефоне, так и на компьютере благодаря технологии PWA. ',
            imageUrl: 'cookEasy',
            videoUrl: 'https://rutube.ru/play/embed/610c0a862ecc27ea3766dbfbaa4cf387'
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