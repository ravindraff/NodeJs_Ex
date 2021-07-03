import * as express from "express";

let accounts: any = express.Router();
accounts.get('/', (req: any, res: any) => {
    res.status(200).json({ "message": "Welcome to Accounts Module" })
})

accounts.get('/login', (req: any, res: any): any => {
    let uname: any = req.query.uname;
    let upwd: any = req.query.upwd;
    if (uname === "admin" && upwd == "admin") {
        res.status(200).json({ "Login": "Login Successfully" })
    } else {
        res.status(401).json({ "Login": "Login Failure" })
    }

});

export default accounts;
//http://localhost:8080/Accounts
//http://localhost:8080/Accounts/login?uname=admin&upwd=admin
