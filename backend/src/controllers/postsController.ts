import { Post } from "../models/Post";

import { Request, Response } from "express";

let posts:Post[] = [
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
    return res.status(200).json(posts);
}

export const getSinglePost = (req:Request, res:Response): Response |undefined => {
    const id:number = parseInt(req.params.postId);
    const post = posts.find(post => post.id === id);
    if(post) {
        return res.status(200).json({post});
    }
    return res.status(404).json({message: `Post with ID: ${id} not found.`});
}

export const addPost = (req: Request, res: Response): Response | null => {
    const body:Post = req.body;
    // Validation if Required (Of course in Real Application)
    posts.push(body);
    return res.status(201).json(body);
}


export const deletePost = (req: Request, res: Response): Response => {
    const id:number = parseInt(req.params.postId);
    const filteredPosts:Post[] = posts.filter(post => post.id !== id);
    posts = filteredPosts;
    // posts.splice(index, 1); // Another way, directly modifies the original array. Need to find the index of element
    return res.status(200).json(filteredPosts);
}