import * as express from "express";
let app: any = express();
app.get('/', (req: any, res: any): any => {
    res.status(200).json({
        "message": "welcome to typescript with node js...."
    })
});

app.listen(
    8080, () => {
        console.log("server started successfully....")
    }
)
