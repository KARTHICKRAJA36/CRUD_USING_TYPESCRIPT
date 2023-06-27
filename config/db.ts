import { Sequelize } from "sequelize"
const sequelize = new Sequelize('typetask', 'root', 'Karthick@1601', {
    host: "localhost",
    dialect: "mysql"
});
export default sequelize
