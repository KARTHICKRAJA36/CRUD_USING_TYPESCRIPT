import Users from "../../models/user"
import CustomError from "../../utils/customerror"

export const deletedata = async (id: number) => {
    try {
        const user = await Users.findByPk(id)
        if (!user) {
            throw new CustomError(400, 'user not found')
        }
        await user.destroy();
        return user
    }
    catch (error: any) {
        console.log(error.message);
        const err = new CustomError(500, error.message)
        throw err;
    }
}