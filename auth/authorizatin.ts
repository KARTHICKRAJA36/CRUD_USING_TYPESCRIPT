import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/customerror"

declare module "express" {
    interface Request {
        id?: number;
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        const err = new CustomError(401, "Token not provided.");
        return next(err);
    }

    try {
        const decoded: JwtPayload = jwt.verify(token, "secret_key") as JwtPayload;
        req.id = decoded.id;
        next();
    } catch (error) {
        const err = new CustomError(401, "Invalid token.");
        next(err);
    }
};
