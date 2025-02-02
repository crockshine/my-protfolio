import styles from './RotatePlayText.module.css'
import {cn} from "@/lib/utils";

const RotatePlayText = () => {
    return (
        <div className={styles.svg_block}>
            <svg viewBox="0 0 200 200" className={styles.circle_text}>
                <path id="circlePath" fill="transparent" stroke="none"
                      d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"/>
                <text fill="white">
                    <textPath href="#circlePath" startOffset="1%" >
                        Смотреть Смотреть Смотреть Смотреть
                    </textPath>
                </text>

            </svg>
            <svg viewBox="0 0 75 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 44L-4.07833e-06 87.3013L-2.92811e-07 0.698727L75 44Z" fill="white"/>
            </svg>
        </div>

    )
}

export default RotatePlayText;