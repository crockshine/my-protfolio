export interface Link {
    link: string;
    color: string;
    title: string;
}

export interface IProject {
    imageUrl: string,
    title: string,
    description: string,
    videoUrl: string
    links?: Link[],
}