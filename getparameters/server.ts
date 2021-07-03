import * as express from "express";
let app:any = express();
app.get('/login',(req: any, res: any):any=>{
    if(req.query.uname==="admin"&&req.query.upwd==="admin"){
        res.status(200).json({
            login:"login successfully..."
        });
    }else{
        res.status(401).json({
            login:"login failed...."
        })
    }
})
app.get('/', (req: any, res: any)=>{
    res.sendFile("D:/Practice Files/NodeJs_Ex/getparameters/index.html")
})
app.listen(
    8080, () => {
        console.log("server started successfully...")
    }
)