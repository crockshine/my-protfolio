import styles from './RotateMainText.module.css'

const RotateMainText = () => {
    return (
        <div className={styles.svg_block}>
            <svg viewBox="0 0 200 200" className={styles.circle_text}>
                <path id="circlePath" fill="transparent" stroke="none"
                      d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"/>
                <text fill="white">
                    <textPath href="#circlePath">
                        JavaScript разработчик.ㅤДелаю хороший UX / UI.ㅤЗнаю современные фреймворки - Next.js, React,
                        Vue.ㅤ
                    </textPath>
                </text>
            </svg>
        </div>

    )
}

export default RotateMainText;