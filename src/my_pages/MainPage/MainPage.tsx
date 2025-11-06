import styles from './MainPage.module.css'
import React from 'react';
import Image from 'next/image'
import RotateMainText from "@/components/assets/RotateMainText/RotateMainText";
import {Button} from "@/components/ui/button";

const MainPage = () => {

    return (
        <section className={styles.main_section}>

            <div className={styles.main_info}>
                <span>михаил королев</span>
                <div><span>frontend</span><span>dev</span></div>
            </div>

            <div className={styles.image_block}>
                <RotateMainText/>
                <Image
                    src={'/photo.webp'}
                    priority={true}
                    className={styles.photo}
                    width={400}
                    height={500}
                    alt={'photo'}
                />
                <div className={styles.circle}/>
            </div>
            <div className={styles.social}>
                <Button variant='secondary'>
                    <a href="https://github.com/crockshine" target={'_blank'} className={styles.aBlock}>
                        <Image
                            src={'/gh.webp'}
                            width={25}
                            height={25}
                            alt={'gh'}
                        />
                        <h3>Github</h3>
                    </a>
                </Button>
                <Button variant='secondary'>
                    <a href="https://t.me/crockshine" target={'_blank'}  className={styles.aBlock}>
                        <Image
                            src={'/tg.webp'}
                            width={25}
                            height={25}
                            alt={'gh'}
                        />
                        <h3>Telegram</h3>
                    </a>
                </Button>
            </div>
        </section>
    )
}


export default MainPage;