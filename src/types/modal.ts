import {IStack} from "@/types/stack.interface";
import {IVideoPlayer} from "@/types/video.interface";

export type ModalList =
    "none"
    | "stack"
    | "video"

export type ModalData<T extends ModalList> =
    T extends "stack" ? IStack :
    T extends  "video" ? IVideoPlayer :
    never
