"use client";
import React from "react";
import styles from "./StackInfoModal.module.css";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import {useModal} from "@/context/modal.context";
import {ModalList} from "@/types/modal";
import Image from 'next/image'

const StackInfoModal = () => {
    const modal = useModal()
    if (modal?.currentModal !== ModalList.STACK || ! modal.getModalData(ModalList.STACK)) return
    const modalData = modal.getModalData(ModalList.STACK)

    return (
        <Dialog open={modal.currentModal === 'stack'} onOpenChange={modal.closeAll} >
            <div style={{display:'none'}}>
                <DialogDescription/>
                <DialogTitle/>
                <DialogHeader/>
            </div>


            <DialogContent>
                <div className={styles.dialog_content}>
                    <div className={styles.image_block}>
                        <Image
                            src={`/${modalData?.imageUrl}.webp` || ''}
                            width={100}
                            height={110}
                            alt={'stack logo'}
                            style={modalData?.title === 'next' || modalData?.title === 'github' ? {filter:'invert(100%)'} : {}}
                        />
                    </div>
                    <h2>
                        {
                            modalData?.title
                        }
                    </h2>
                    <p>
                        {
                            modalData?.description
                        }
                    </p>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default StackInfoModal;
