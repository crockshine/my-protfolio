'use client'
import styles from './StackCard.module.css'
import React, {useEffect, useRef} from "react";
import Image from 'next/image'
import {IStack} from "@/types/stack.interface";
import {useModal} from "@/context/modal.context";
import {cn} from "@/lib/utils";

const StackCard: React.FC<IStack> = ({imageUrl, title, description, shadowColor}) => {
    const modal = useModal()
    const cardRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (cardRef.current !== null){
            cardRef.current?.style.setProperty('--shadow-color', shadowColor)
        }
    }, [cardRef]);

    return (
        <div
            ref={cardRef}
            className={cn(styles.stack_card)}
            onClick={() => modal?.onOpen('stack',{title, description,imageUrl,shadowColor})}
        >

            <div className={styles.info}>
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

        </div>
    )
}

export default StackCard;