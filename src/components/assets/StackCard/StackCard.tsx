'use client'
import styles from './StackCard.module.css'
import React, {useEffect, useRef, useState} from "react";
import Image from 'next/image'
import {IStack} from "@/types/stack.interface";
import {cn} from "@/lib/utils";
import {gsap} from 'gsap'

const StackCard: React.FC<IStack> = ({imageUrl, title, description,shadowColor}) => {
    const [isOpen, setOpen] = useState<boolean>(true)
    const cardRef = useRef<HTMLDivElement | null>(null)
    const infoRef = useRef<HTMLDivElement | null>(null)
    const descRef = useRef<HTMLDivElement | null>(null)

    const tl = gsap.timeline()
    const rotate = useRef<number>(0)
    const showMore = () => {
        if (tl.isActive()) return;

        rotate.current = rotate.current + 180
        if (isOpen) {
            tl
                .to(cardRef.current, {
                    rotateY: rotate.current,
                    duration: 0.2
                })
                .to(infoRef.current,
                    {opacity: 0, duration: 0.2, delay: -0.2})
                .call(() => setOpen(false))
        } else {
            tl
                .to(cardRef.current, {
                    rotateY: rotate.current,
                    duration: 0.3

                })
                .to(descRef.current,
                    {opacity: 0, duration: 0.2, delay: -0.2})
                .call(() => setOpen(true))
        }
    }

    useEffect(() => {
        if (isOpen && infoRef.current) {
            gsap.to(infoRef.current, {opacity: 1, duration: 0.2});
        } else if (descRef.current) {
            gsap.to(descRef.current, {opacity: 1, duration: 0.2});
        }
    }, [isOpen]);

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            card.style.setProperty('--shadow-color', shadowColor);
        }
    }, []);
    return (
        <div
            className={
            cn(styles.stack_card,
                description.length > 0 && styles.has_info,
                !isOpen ? styles.openedCard :  styles.closedCard ) }
            onClick={showMore}
            ref={cardRef}
        >
            {
                isOpen
                    ?
                    <div className={styles.info} ref={infoRef}>
                        <div className={styles.img_block}>
                            <Image
                                src={`/${imageUrl}.png`}
                                width={90}
                                height={100}
                                alt={'programming language'}
                            />
                        </div>
                        <h3>{title}</h3>
                    </div>
                    :
                    <div className={styles.description} ref={descRef}>
                        {description}
                    </div>
            }
        </div>
    )
}

export default StackCard;