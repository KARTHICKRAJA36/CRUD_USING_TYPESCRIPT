
import CustomError from "../../utils/customerror";
import Users from "../../models/user";




export const updatedata = async (id: number, username: string, password: string, age: number, DOB: string) => {

    try {
        const user = await Users.findByPk(id)
        if (!user) {
            throw new CustomError(402, "user not found..")
        }
        console.log(user);

        user.update({
            username,
            password,
            age,
            DOB
        })

        return user;


    }
    catch (error: any) {
        console.log(error.message);
        const err = new CustomError(500, error.message)
        throw err;

    }


}