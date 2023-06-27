const express = require("express")

const app = express();
const port = 3000;
import sequelize from "./config/db";
import Users from "./models/user";
app.use(express.json());
import router from "./router/router"
import globalerrorhandle from "./utils/globalerror"

sequelize.authenticate()
    .then(() => {
        console.log("database connected....");
    })
    .catch((error) => {
        console.log(error.message);
    })

Users.sync()
    .then(() => {
        console.log("Table created successfully...");
    })
    .catch((error) => {
        console.log(error.message);

    })
app.use(router);
app.use(globalerrorhandle);

app.listen(port, () => {
    console.log(`port running at ${port}`);

})