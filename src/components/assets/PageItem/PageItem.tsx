'use client'
import styles from './PageItem.module.css'
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import React, {useRef} from "react";
import { gsap } from "gsap";
import {IPage, Pages} from "@/types/page.interface";
import About from "@/pages/About/About";
import StackPage from "@/pages/StackPage/StackPage";


const PageItem: React.FC<IPage> = ({id, title, page}) => {
    const boxRef = useRef<HTMLButtonElement | null>(null)
    const triggerAnimate = (event: React.MouseEvent<HTMLButtonElement>) => {
        const box = boxRef.current;
        console.log(box?.dataset.state);
        if (box) {
            // Позиция клика относительно блока
            const rect = box.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Создаём новый элемент для анимации
            const ripple = document.createElement("div");
            ripple.className = styles.ripple;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            box.appendChild(ripple);

            // Анимация
            gsap.timeline({
                onComplete: () => {
                    ripple.remove(); // Удаление элемента после завершения анимации
                },

            })
                .to(ripple, {
                    scale: 500,
                    opacity: 1,
                    ease: "power2.out",
                    duration:0.5
                })
                .to(ripple, {
                    opacity: 0,
                    delay:-0.5,
                    ease: "power2.in",
                    duration:0.5

                });
        }
    };

    const switchPage = () => {
        switch (page) {
            case Pages.ABOUT:
                return <About/>
            case Pages.STACK:
                return <StackPage/>
        }
    }
    return (
            <AccordionItem  value={`item-${id}`} className={styles.accordion_item}>
                <AccordionTrigger ref={boxRef} onClick={triggerAnimate} className={styles.accordion_trigger}>
                    <span>{title}</span>
                </AccordionTrigger>


                <AccordionContent className={styles.accordion_content}>
                    {
                        switchPage()
                    }
                </AccordionContent>
            </AccordionItem>
    )
}

export default PageItem;