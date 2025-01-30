import {createContext, ReactNode, useContext, useState} from "react";
import {ModalData, ModalList} from "@/types/modal";

interface IModalContext<T extends ModalList> {
    currentModal: T,
    modalData: ModalData<T> | null
    onOpen: <K extends ModalList>(name: K, data?: ModalData<K> | null) => void,
    closeAll: () => void,
}

const ModalContext = createContext<IModalContext<ModalList> | undefined>(undefined)

export const ModalProvider = ({children}: { children: ReactNode }) => {
    const [modalData, setModalData] = useState<ModalData<ModalList> | null>(null)
    const [currentModal, setCurrentModal] = useState<ModalList>('none')
    const onOpen = <T extends ModalList>(name: T, data?: ModalData<T>) => {
        setCurrentModal(name)
        setModalData(data || null)
    }
    const closeAll = () => {
        setCurrentModal('none')
        setModalData(null)
    }

    return (
        <ModalContext.Provider value={{currentModal, modalData, onOpen, closeAll}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

