import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Users extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public age!: number;
  public DOB!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
    freezeTableName: true,
    timestamps: false
  }
);

export default Users;
