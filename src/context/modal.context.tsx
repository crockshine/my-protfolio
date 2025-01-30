'use client'
import {createContext, ReactNode, useContext, useState} from "react";
import {ModalData, ModalList} from "@/types/modal";

interface IModalContext<T extends ModalList>{
    currentModal: ModalList,
    getModalData: <K extends ModalList> (modalName: K) => ModalData<K> | null ,
    onOpen: <K extends ModalList> (modalName: K, data?: ModalData<K> | null) => void,
    closeAll: () => void,
}

const ModalContext = createContext<IModalContext<ModalList> | undefined>(undefined)

export const ModalProvider = ({children}: { children: ReactNode }) => {
    const [modalData, setModalData] = useState<ModalData<ModalList> | null>(null)
    const [currentModal, setCurrentModal] = useState<ModalList>('none')
    const onOpen = <T extends ModalList>(name: T, data?: ModalData<T>) => {
        setCurrentModal(name)
        console.log(name);
        setModalData(data || null)
    }
    const closeAll = () => {
        setCurrentModal('none')
        setModalData(null)
    }

    const getModalData = <T extends ModalList>(modalName: T): ModalData<T> | null => {
        // Проверяем, что текущая модалка совпадает с запрашиваемой
        if (currentModal !== modalName) return null;

        // Приводим modalData к нужному типу, если тип совпадает
        return modalData as ModalData<T>;
    }

    return (
        <ModalContext.Provider value={{currentModal,  getModalData, onOpen, closeAll}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

