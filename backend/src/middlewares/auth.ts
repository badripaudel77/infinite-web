// Based on certain header information, it grants or denies the access to the route.
// Dummy token is : thisisdummytoken

import { NextFunction, Request, Response } from "express";

const dummyToken:string = 'thisisdummytoken';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authToken = req.headers['authorization'];
    
    if(!authToken) {
        return res.status(401).json({message: 'No authentication token present'});
    }
    // More validation
    const token:string = authToken.split('Bearer ')[1];
    if(token !== dummyToken) {
        return res.status(401).json({message: 'Invalid Token'});
    }
    next();
}