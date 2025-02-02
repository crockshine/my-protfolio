'use client'
import {createContext, ReactNode, useContext, useState} from "react";
import {ModalDataMap, ModalList} from "@/types/modal";

interface IModalContext<T extends ModalList>{
    currentModal: ModalList,
    getModalData: <K extends ModalList> (modalName: K) => ModalDataMap[K] | null,
    onOpen: <K extends ModalList> (modalName: K, data?: ModalDataMap[K] ) => void,
    closeAll: () => void,
}

const ModalContext = createContext<IModalContext<ModalList> | undefined>(undefined)

export const ModalProvider = ({children}: { children: ReactNode }) => {
    const [modalData, setModalData] = useState<ModalDataMap[ModalList] | null>(null)
    const [currentModal, setCurrentModal] = useState<ModalList>(ModalList.NONE)
    const onOpen = <T extends ModalList>(name: T, data?: ModalDataMap[T]) => {
        setCurrentModal(name)
        setModalData(data || null)
    }
    const closeAll = () => {
        setCurrentModal(ModalList.NONE)
        setModalData(null)
    }

    const getModalData = <T extends ModalList>(modalName: T): ModalDataMap[T] | null=> {
        // Проверяем, что текущая модалка совпадает с запрашиваемой
        if (currentModal !== modalName) return null;

        return modalData as ModalDataMap[T]
    }

    return (
        <ModalContext.Provider value={{currentModal,  getModalData, onOpen, closeAll}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

