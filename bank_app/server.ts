import * as express from "express";
import Transaction from "./transaction";
import Accounts from "./account";
import Cards from "./cards";

let app:any = express();

app.use("/Accounts", Accounts);
app.use("/Transaction", Transaction);
app.use("/Cards", Cards);

app.listen(8080,()=>{
    console.log("server started successfully")
})