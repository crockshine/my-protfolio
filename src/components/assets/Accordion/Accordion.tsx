import s from './Accordion.module.css'
import type {FC} from 'react'
import {
    Accordion as BaseAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
    title?: string
    description: string
}

const Accordion: FC<Props> = ({title='Подробнее', description}) => {
    return (
        <BaseAccordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent className={s.description}>
                    {description}
                </AccordionContent>
            </AccordionItem>
        </BaseAccordion>
    );
};

export default Accordion;