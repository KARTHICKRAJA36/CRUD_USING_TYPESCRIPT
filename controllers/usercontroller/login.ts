
import { Request, Response, NextFunction } from "express";
import { LoggedUser } from "../../services/userservice/loginservice"
import CustomError from "../../utils/customerror";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const loggeduser = await LoggedUser(username, password);
        res.json({
            statusCode: 200,
            status: "success",
            message: "logged in successfully..",
            data: loggeduser,
        })

    }
    catch (error: any) {
        const err = new CustomError(500, error.message)
        next(err);

    }
}