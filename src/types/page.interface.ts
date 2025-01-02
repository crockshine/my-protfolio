export enum Pages {
    ABOUT = 'about',
    STACK = 'stack',
    PROJECTS = 'projects'
}
export interface IPage{
    id?: number,
    title: string,
    page: Pages
}