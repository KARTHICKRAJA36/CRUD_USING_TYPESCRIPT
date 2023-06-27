import { Request, Response, NextFunction } from "express"
import { createUser } from "../../services/userservice/createservice";
import CustomError from "../../utils/customerror";

export const createuser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, age, DOB } = req.body;
        if (!username) {
            const err = new CustomError(401, 'username field is required')
            next(err);
        }
        if (!password) {
            const err = new CustomError(402, 'password field is required')
            next(err);
        }
        if (!age) {
            const err = new CustomError(403, 'age field is required')
            next(err);
        }
        if (!DOB) {
            const err = new CustomError(404, 'DOB field is required')
            next(err);
        }
        const newUser = await createUser(username, password, age, DOB);
        res.json({
            statusCode: 200,
            status: "success",
            message: "user created successfully..",
            data: newUser,
        });
    } catch (error: any) {
        console.log(error);
        const err = new CustomError(500, error.message);
        next(err);
    }
};



