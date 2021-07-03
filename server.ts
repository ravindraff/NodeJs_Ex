import * as express from "express";
import transaction from "./transaction";
import account from "./accounts";
let app: any= express();
app.use("/module1",transaction);
app.use("/module2",account);
app.listen(8080,()=>{
    console.log("server started successfully...!")
})



