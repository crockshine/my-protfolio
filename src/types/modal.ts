import {IStack} from "@/types/stack.interface";
import {IVideoPlayer} from "@/types/video.interface";

export enum ModalList {
    NONE = "none",
    STACK = "stack",
    VIDEO = "video",
}

export type ModalDataMap = {
    [ModalList.NONE]: null;
    [ModalList.STACK]: IStack;
    [ModalList.VIDEO]: IVideoPlayer;
};
