import { Post } from "../models/Post";

import { Request, Response } from "express";

const posts:Post[] = [
    {
        id: 1,
        titlle: 'title 1',
        body:'body 1',
        userId: 100
    },
    {
        id: 2,
        titlle: 'title 2',
        body:'body 2',
        userId: 200
    },
    {
        id: 3,
        titlle: 'title 3',
        body:'body 3',
        userId: 300
    }
]

const getFakePosts = ():Post[] => {
    // Probably more logic
   return posts;
}

export const getPosts = (req: Request, res: Response): Response => {
    const posts:Post[] = getFakePosts();
    // console.log(req, res);
    return res.status(200).json({allPosts: posts});
}



