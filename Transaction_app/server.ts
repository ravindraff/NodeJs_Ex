import * as express from "express";

import Cards from "./cards";
import Transaction from "./transaction";
import Account from "./accounts";

let app = express();
app.use("/Cards", Cards);
app.use("/Trans",Transaction);
app.use("/Account",Account);

app.listen(8080,()=>{
    console.log("server started successfully");
})


