"use client";
import React from "react";
import styles from "./StackInfoModal.module.css";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {useModal} from "@/context/modal.context";

const StackInfoModal = () => {
    const modal = useModal()
    if (modal?.currentModal !== "stack" && modal.getModalData('stack')) return <></>

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
                        modal.getModalData('stack')?.title
                    }
                </h2>
                <h3>
                    {
                        modal.getModalData('stack')?.description
                    }
                </h3>
            </DialogContent>
        </Dialog>
    );
};

export default StackInfoModal;
