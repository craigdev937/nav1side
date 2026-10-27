export type MODE = "light" | "dark";

export interface ITheme {
    mode: MODE
};

export interface ICom {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: {
        id: number,
        username: string,
        fullName: string
    }
};

export interface IComData {
    total: number,
    skip: number,
    limit: number,
    comments: ICom[]
};





