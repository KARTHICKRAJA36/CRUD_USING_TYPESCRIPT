
import Users from "../../models/user"
import CustomError from "../../utils/customerror";

export const readdata = async (id: number) => {
    try {
        const user = await Users.findByPk(id);
        if (!user) {
            throw new CustomError(402, "user not found..")
        }
        return user;


    }
    catch (error: any) {
        console.log(error);
        const err = new CustomError(500, error.message)
        throw err;
    }
}