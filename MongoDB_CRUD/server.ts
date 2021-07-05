import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";
import fetch from "./fetch/fetch"
let app:any = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:false }));
app.use("/fetch",fetch);
app.listen(8080,()=>{
    console.log("server started successfully")
})
