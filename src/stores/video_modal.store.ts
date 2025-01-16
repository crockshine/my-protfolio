import {makeAutoObservable} from "mobx";

const VideoModal = new class AdminElements{
    constructor() {
        makeAutoObservable(this)
    }

    isOpen: boolean = false

    setVisible(state: boolean){
        this.isOpen = state
    }
}

export default VideoModal