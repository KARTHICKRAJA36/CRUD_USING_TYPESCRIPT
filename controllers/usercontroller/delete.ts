import { Request, Response, NextFunction } from "express";
import CustomError from "../../utils/customerror";
import { deletedata } from "../../services/userservice/deleteservice"

export const deleteuser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userid = req.params.userid
        let id = req.id
        if (id === undefined) {
            throw new CustomError(400, "User ID is missing.");
        }
        if (Number(userid) !== id) {
            throw new CustomError(403, "id mismatched")
        }
        const data = await deletedata(id)
        res.json({
            statuscode: 200,
            status: "success",
            message: "user data deleted successfully.."
        })
    }
    catch (error: any) {
        console.log(error.message);
        const err = new CustomError(500, error.message)
        next(err);

    }
}