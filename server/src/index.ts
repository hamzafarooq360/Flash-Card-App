import express, {Request, Response} from "express";
import mongoose, { models } from "mongoose"
import {config} from "dotenv";
config();
import Deck from "./models/Deck";

const PORT = 3000;

const app = express();

app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {

    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck)
});

app.get("/gg", (req: Request, res: Response) => {
    res.send("gg")
});

mongoose.connect(
    process.env.MONGO_URL!
    )
    .then (() => {
        console.log(`listening on port ${PORT}`)
        app.listen(PORT)
    })

