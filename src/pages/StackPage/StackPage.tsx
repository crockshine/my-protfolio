import styles from './StackPage.module.css'
import React from 'react';
import StackCard from "@/components/assets/StackCard/StackCard";
import {IStack} from "@/types/stack.interface";

const StackPage = () => {
    const stackList: IStack[] = [
        {
            title: 'react',
            imageUrl: 'react',
            description: 'блабалбал'
        },
        {
            title: 'next',
            imageUrl: 'next',
        },
        {
            title: 'vue',
            imageUrl: 'vue',
        },
        {
            title: 'ts',
            imageUrl: 'ts',
        },

        {
            title: 'mobx',
            imageUrl: 'mobx',
        },
        {
            title: 'pinia',
            imageUrl: 'pinia',
        },
        {
            title: 'html',
            imageUrl: 'html',
        },
        {
            title: 'css',
            imageUrl: 'css',
        },

        {
            title: 'tailwind',
            imageUrl: 'tw',
        },


        {
            title: 'git',
            imageUrl: 'git',
        },
        {
            title: 'github',
            imageUrl: 'gh',
        }
    ]
    return (
        <>
            <div className={styles.stack_page}>
                {
                    stackList.map((lng,index) =>
                        <StackCard
                            key={index}
                            title={lng.title}
                            imageUrl={lng.imageUrl}
                            description={lng.description}
                        />
                    )
                }
            </div>
        </>
    )
};

export default StackPage;