import * as express from "express";
import * as bodyParser from "body-parser";//for typscript code only, use require for js
let app: any = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let auth: any = (req: any, res: any, next: any): any => {
    let allHeaders: any = req.headers;
    let token: any = allHeaders.token;

    if (token === "nodejs") {
        next();
    } else {
        res.status(500).json({
            auth: "Authentication failed"
        })
    }
};
app.post('/login', [auth], (req: any, res: any): any => {
    let uname: any = req.body.uname;
    let upwd: any = req.body.upwd;
    if (uname === "admin" && upwd === "admin") {
        res.status(200).json({ message: "Login Successfully" })
    } else {
        res.status(401).json({ message: "Login Failure" })
    }
});
app.listen(8070, () => {
    console.log("server started successfully on port ")
})
