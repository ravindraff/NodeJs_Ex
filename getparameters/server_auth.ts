import * as express from "express";
let app: any = express();

//Authorization
let auth: any = (req: any, res: any, next: any) => {
    let allHeaders = req.headers;
    if (allHeaders.token === "admin") {
        next();
    } else {
        res.status(500).json({
            auth: "Authentication failed"
        })
    }
}


app.get('/login',[auth], (req: any, res: any): any => {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({
            login: "login successfully..."
        });
    } else {
        res.status(401).json({
            login: "login failed...."
        })
    }
})
app.listen(
    8080, () => {
        console.log("server started successfully...")
    }
)