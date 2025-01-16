import styles from './page.module.css'
import MainPage from "@/my_pages/MainPage/MainPage";
import About from "@/my_pages/About/About";
import StackPage from "@/my_pages/StackPage/StackPage";
import ProjectPage from "@/my_pages/ProjectPage/ProjectPage";
import React from "react";

export default function Home() {
    return (
        <>
            <MainPage/>
            <div className={styles.page_list}>
                <h1>// обо мне</h1>
                <About/>
                <h1>// я знаю</h1>
                <StackPage/>
                <h1>// мои проекты</h1>
                <ProjectPage/>
            </div>
        </>

    );
}
