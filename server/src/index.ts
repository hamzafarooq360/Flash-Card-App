import express, {Request, Response} from "express";
import mongoose, { models } from "mongoose"
import {config} from "dotenv";
config();
import Deck from "./models/Deck";
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
    // fetch decks and send to user
    const decks = await Deck.find();
    console.log(decks);
    res.json(decks);

});

app.post("/decks", async (req: Request, res: Response) => {

    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck)
});


mongoose.connect(
    process.env.MONGO_URL!
    )
    .then (() => {
        console.log(`listening on port ${PORT}`)
        app.listen(PORT)
    })

