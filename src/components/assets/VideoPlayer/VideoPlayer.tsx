"use client";
import React, {useEffect, useState} from "react";
import styles from "./VideoPlayer.module.css";
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

interface VideoPlayerProps {
    imageUrl: string;
    videoUrl: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({imageUrl, videoUrl}) => {
    const [openModal, setOpenModal] = useState(false);
    const [play, setPlay] = useState<boolean>(false);

    useEffect(()=>{
        if(openModal){
            setTimeout(()=>{
                setPlay(true)
            },100)
        } else {
            setPlay( false)
        }
    },[openModal])

    return (
        <Dialog open={openModal} onOpenChange={(open)=>setOpenModal(open)} >
            <DialogTrigger className={styles.image_block}>
                <Image
                    className={styles.image_block_img}
                    src={imageUrl}
                    width={728}
                    height={381}
                    alt={'project'}
                />
                <RotatePlayText className={styles.rotate_play_text}/>
            </DialogTrigger>

            <div style={{display:'none'}}>
                <DialogTitle/>
                <DialogHeader/>
                <DialogDescription/>
            </div>

            <DialogContent className={styles.dialog_content}>
                <div className={styles.video}>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        playing={play}
                        width="100%"
                        height="100%"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VideoPlayer;
