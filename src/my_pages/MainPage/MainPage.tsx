import styles from './MainPage.module.css'
import React from 'react';
import Image from 'next/image'
import RotateMainText from "@/components/assets/RotateMainText/RotateMainText";

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
                        src={'/photo.png'}
                        className={styles.photo}
                        width={630}
                        height={690}
                        alt={'photo'}
                    />
                    <Image
                        src={'/circle.svg'}
                        className={styles.circle}
                        width={630}
                        height={630}
                        alt={'center_circle'}
                    />
                </div>

            </section>



    )
}


export default MainPage;