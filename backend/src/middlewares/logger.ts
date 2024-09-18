// Simply logs the path user visited.

import { NextFunction, Request, Response } from "express"

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`User visited path: ${req.path} => `, req.headers.host);
    // our coustom logic
    // continue rest of the work.
    next();
}