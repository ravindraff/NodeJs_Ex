import * as express from "express";
let transaction: any = express.Router();
let auth1: any = (req: any, res: any, next: any)=>{
    let allHeaders: any = req.headers;
    let token: any = allHeaders.token;
    if (token==="admin") {
        next();
    } else {
        res.status(402).json({"Message":"Token Authentication Failure"})
    }

}
let auth2: any = (req: any, res: any, next: any)=>{
    let allHeaders: any = req.headers;
    let wish: any = allHeaders.wish;
    if (wish==="hello") {
        next();
    } else {
        res.status(402).json({"Message":"Wish Authentication Failure"})
    }

}

transaction.get('/login',[auth1,auth2], (req: any, res: any) => {
    let uname: any = req.query.uname;
    let upwd: any = req.query.upwd;
    if (uname === "admin" && upwd == "admin") {
        res.status(200).json({ "Login": "Trans Login Successfully" })
    } else {
        res.status(401).json({ "Login": "Trans Login Failure" })
    }
})

export default transaction;
 
http://localhost:8080/Transaction/login?uname=admin&upwd=admin (Token,Wish)
//http://localhost:8080/Transaction/login?uname=admin&upwd=admin
