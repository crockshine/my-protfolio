"use client";
import React, {useEffect, useState} from "react";
import styles from "./VideoPlayerModal.module.css";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import RotatePlayText from "@/components/assets/RotatePlayText/RotatePlayText";
import ReactPlayer from "react-player";
import {useModal} from "@/context/modal.context";
import {ModalList} from "@/types/modal";

const VideoPlayerModal = () => {
    const modal = useModal()
    const [loading, setLoading] = useState(true);
    const handleClose = () => {
        modal?.closeAll()
        setLoading(true)
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
                        <ReactPlayer
                            url={modal?.getModalData(ModalList.VIDEO)?.videoUrl}
                            controls
                            width="100%"
                            height="100%"
                        />

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
