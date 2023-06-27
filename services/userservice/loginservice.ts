import bcrypt from "bcrypt";
import Users from "../../models/user";
import jwt from "jsonwebtoken";
import CustomError from "../../utils/customerror";

export const LoggedUser = async (username: string, password: string) => {
  try {
    if (!username || !password) {
      throw new CustomError(400, "Username and password fields are required to login");
    }

    const isUser = await Users.findOne({ where: { username: username } });
    if (!isUser) {
      throw new CustomError(400, "User not found");
    }

    const isValidPassword = await bcrypt.compare(password, isUser.password);
    if (!isValidPassword) {
      throw new CustomError(400, "Invalid password");
    }

    const token = jwt.sign({ id: isUser.id }, 'secret_key');
    return { id: isUser.id, username: isUser.username, token };
  } catch (error: any) {
    console.log(error);
    throw new CustomError(500, error.message);
  }
};
