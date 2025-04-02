import styles from './StackPage.module.css'
import React from 'react';
import StackCard from "@/components/assets/StackCard/StackCard";
import {IStack} from "@/types/stack.interface";

const StackPage = () => {
    const stackList: IStack[] = [
        {
            title: 'react',
            imageUrl: 'react',
            description:
                'Знаком с React 19.' +
                ' Умею работать с компонентами (RSC, Client Components), состоянием (ContextApi, стейт менеджеры),' +
                ' хуками и маршрутизацией. Понимаю жизненный цикл компонента.',
            shadowColor: '#007FB633'
        },
        {
            title: 'next',
            imageUrl: 'next',
            description:
                'Умею работать с app маршрутизацией, понимаю SSR, SSG, ISR.' +
                ' Освоил оптимизацию приложений (картинки, шрифты и др.), ' +
                'а так-же оптимизацию для SEO. Могу грамотно продумать дерево компонентов, для ' +
                'максимальной производительности.',
            shadowColor: '#FFFFFF33'
        },
        {
            title: 'vue',
            imageUrl: 'vue',
            description:
                'Умею работать с vue директивами (v-bind, v-on, v-if и др.)' +
                ' Освоил передачу данных между компонентами (props, $emit). Работал со slots. ' +
                'Использовал Vue Router. Работал как с Option API, так и с Composition API. Работал со встроенными хуками.',
            shadowColor: '#14D20033'
        },
        {
            title: 'ts',
            imageUrl: 'ts',
            description:
                'Понимание примитивных типов, интерфейсов и типов, ' +
                'умение работать с типизацией функций и объектов, ' +
                'параметрами по умолчанию, и использовать generics ',
            shadowColor: '#005BD233'
        },
        {
            title: 'mobx',
            imageUrl: 'mobx',
            description:
                'Работал с реактивным состоянием (observable), actions и computed свойствами. ' +
                'Разделяю сторы на логичные отдельные части. Понимаю разницу между единым (глобальным) стором и локальным.',
            shadowColor: '#D2580033'
        },
        {
            title: 'pinia',
            imageUrl: 'pinia',
            description: 'Разделяю сторы на логичные отдельные части. Понимаю разницу между единым (глобальным) стором и локальным.',
            shadowColor: '#D2C80033'
        },
        {
            title: 'html',
            imageUrl: 'html',
            description: 'Знаю и использую семантические теги, различные атрибуты, теги для форм и многое другое.',
            shadowColor: '#D2580033'
        },
        {
            title: 'css',
            imageUrl: 'css',
            description:
                'Знаю базовые стили, селекторы, псевдоклассы, псевдоэлементы. ' +
                'Умею реализовывать адаптивную верстку (flex, grid, media),' +
                ' знаю относительные и абсолютные величины, ' +
                'работал с css переменными. Применял различные виды стилизации - styled component, ' +
                'css in js. Применяю в работе различные css библиотеки - Next UI, ShadCN, GSAP.',
            shadowColor: '#005BD233'
        },
        {
            title: 'tailwind',
            imageUrl: 'tw',
            description: 'Занимался настройкой tw-конфига, использовал стилизацию через классы,' +
                ' реализовывал интерактивный дизайн.',
            shadowColor: '#00A1D233'
        },
        {
            title: 'git',
            imageUrl: 'git',
            description:
                'Понимание концепции систем контроля версий. Знаю и использую основные команды' +
                ' (init, clone, add, commit, status, log, push, pull, remote), есть навыки работы' +
                ' с ветками (branch, checkout, rebase). Понимаю принципы Git Flow.',
            shadowColor: '#D2270033'
        },
        {
            title: 'github',
            imageUrl: 'gh',
            description: 'Есть опыт командной разработки, настройки репозитория, работы с Pull Request.',
            shadowColor: '#FFFFFF20'
        }
    ]
    return (
        <>
            <div className={styles.stack_page}>

                {
                    stackList.map((lng, index) =>
                        <StackCard
                            key={index}
                            title={lng.title}
                            imageUrl={lng.imageUrl}
                            description={lng.description}
                            shadowColor={lng.shadowColor}
                        />
                    )
                }
            </div>
        </>

    )
};

export default StackPage;