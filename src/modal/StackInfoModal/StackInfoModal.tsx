"use client";
import React from "react";
import styles from "./StackInfoModal.module.css";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import {useModal} from "@/context/modal.context";
import {ModalList} from "@/types/modal";

const StackInfoModal = () => {
    const modal = useModal()
    if (modal?.currentModal !== ModalList.STACK || ! modal.getModalData(ModalList.STACK)) return

    return (
        <Dialog open={modal.currentModal === 'stack'} onOpenChange={modal.closeAll} >
            <div style={{display:'none'}}>
                <DialogDescription/>
                <DialogTitle/>
                <DialogHeader/>
            </div>


            <DialogContent className={styles.dialog_content}>
                <h2>
                    {
                        modal.getModalData(ModalList.STACK)?.title
                    }
                </h2>
                <h3>
                    {
                        modal.getModalData(ModalList.STACK)?.description
                    }
                </h3>
            </DialogContent>
        </Dialog>
    );
};

export default StackInfoModal;
