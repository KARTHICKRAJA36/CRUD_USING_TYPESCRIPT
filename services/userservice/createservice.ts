import bcrypt from "bcrypt";
import Users from "../../models/user";
import CustomError from "../../utils/customerror";

export const createUser = async (username: string, password: string, age: number, DOB: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      username,
      password: hashedPassword,
      age,
      DOB,
    });
    return newUser;
  } catch (error: any) {
    console.log(error);
    const err = new CustomError(500, error.message)
    throw err;
  }
};
