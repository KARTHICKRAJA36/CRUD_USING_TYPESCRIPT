import { Request, Response, NextFunction } from "express";
import { readdata } from "../../services/userservice/readservice"
import CustomError from "../../utils/customerror";

export const read = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.id
        if (id === undefined) {
            throw new CustomError(400, "User ID is missing.");
        }
        const userdetails = await readdata(id);
        res.json({
            statuscode: 200,
            status: "success",
            message: "data extracted successfully..",
            data: userdetails
        })
    }
    catch (error: any) {
        console.log(error);
        const err = new CustomError(500, error.message);
        next(err);

    }
}