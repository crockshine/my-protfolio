"use client";
import React from "react";
import styles from "./VideoPlayerModal.module.css";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import {useModal} from "@/context/modal.context";
import {ModalList} from "@/types/modal";

const VideoPlayerModal = () => {
    const modal = useModal()
    const handleClose = () => {
        modal?.closeAll()
    }
    return (
        <Dialog open={modal?.currentModal === ModalList.VIDEO} onOpenChange={handleClose}>
            <div style={{display: 'none'}}>
                <DialogTitle/>
                <DialogHeader/>
                <DialogDescription/>
            </div>

            <DialogContent>
                <div className={styles.dialog_content}>

                    <div className={styles.video}>
                        <iframe width="100%" height="100%"
                                src={modal?.getModalData(ModalList.VIDEO)?.videoUrl}
                                allowFullScreen
                                allow="clipboard-write; autoplay"
                        >
                        </iframe>
                    </div>
                    <div className={styles.fallback}>
                        <h2>Пожалуйста, подождите.</h2> <h2>Видео загружается...</h2>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default VideoPlayerModal;
