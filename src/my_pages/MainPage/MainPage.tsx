'use client'
import styles from './MainPage.module.css'
import React, {useEffect, useRef} from 'react';
import Image from 'next/image'
import RotateMainText from "@/components/assets/RotateMainText/RotateMainText";
import {Button} from "@/components/ui/button";
import {gsap} from 'gsap';


const MainPage: React.FC = () => {
    const nameRef = useRef<HTMLSpanElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const socialRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.fromTo(nameRef.current,
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            }
        );

        const titleSpans = titleRef.current?.querySelectorAll('span');
        if (titleSpans) {
            gsap.fromTo(titleSpans,
                {
                    x: -100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                }
            );
        }


        const socialLinks = socialRef.current?.querySelectorAll('button');
        if (socialLinks) {
            gsap.fromTo(socialLinks,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: .5
                }
            );
        }
    }, []);

    return (
        <section className={styles.main_section}>
            <div className={styles.main_info}>
                <span ref={nameRef}>михаил королев</span>
                <div ref={titleRef}><span>frontend</span><span>dev</span></div>
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

            <div ref={socialRef} className={styles.social}>
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
                    <a href="https://t.me/crockshine" target={'_blank'} className={styles.aBlock}>
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