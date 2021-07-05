import * as express from "express";
let transaction: any = express.Router();
transaction.get('/', (req: any, res: any) => {
    res.status(200).json({
        message: "transaction soon...!"
    })
});
transaction.get('/trans', (req: any, res: any) => {
    res.status(200).json({message: "transaction data soon...!"})
});

export default transaction


