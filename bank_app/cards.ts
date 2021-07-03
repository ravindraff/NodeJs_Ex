import * as express from "express";
let cards: any = express.Router();
cards.get('/', (req: any, res: any) => {
    res.status(200).json({"Message":"Welcome To Cards Module"})
})
export default cards;