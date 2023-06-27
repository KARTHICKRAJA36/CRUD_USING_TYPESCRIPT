import { Request, Response, NextFunction } from "express";
import CustomError from "../../utils/customerror";
import { updatedata } from "../../services/userservice/updateservice";

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userid = req.params.userid
        let id = req.id
        if (id === undefined) {
            throw new CustomError(400, "User ID is missing.");
        }
        if (Number(userid) !== id) {
            throw new CustomError(403, "id mismatched")
        }

        let { username, password, age, DOB } = req.body;

        const updatedinfo = await updatedata(id, username, password, age, DOB,)


        res.json({
            statuscode: 200,
            status: "success",
            message: "user data updated successfully..",
            data: updatedinfo
        })

    }
    catch (error: any) {
        console.log(error);
        const err = new CustomError(500, error.message)
        next(err);

    }
}