import {Accordion} from "@/components/ui/accordion";
import React from "react";
import {IPage, Pages} from "@/types/page.interface";
import PageItem from "@/components/assets/PageItem/PageItem";

const AccordionList = () => {
    const pages: IPage[] = [
        {
            title: 'обо мне',
            page: Pages.ABOUT
        },
        {
            title: 'навыки',
            page: Pages.STACK
        },
        {
            title: 'обо мне',
            page: Pages.PROJECTS
        }
    ]

    return (
        <Accordion type="single" collapsible>
            {
                pages.map((page, index) =>
                    <PageItem
                        id={index}
                        key={index}
                        page={page.page}
                        title={page.title}
                    />
                )
            }
        </Accordion>
    )
}

export default AccordionList;