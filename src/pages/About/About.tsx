import styles from './About.module.css'
import React from 'react';

const About = () => {
    return (
        <div className={styles.about_page}>
            <div className={'flex-1'}></div>
            <div className={styles.text_block}>
                <div>
                    Привет) Я frontend разработчик с опытом создания <span>адаптивных</span> и <span>производительных</span> веб-приложений,
                    сайтов. Участвовал в разработке как индивидуальных, так и командных проектов,
                </div>
                <div>
                    Кроме работы, я активно участвую в <span>хакатонах</span> и знакомлюсь с новыми технологиями.
                </div>
                <div>
                    Умею грамотно  <span>организовывать структуру </span> приложений, работать с API и создавать удобный UX/UI.
                </div>
            </div>

        </div>
    )
};

export default About;