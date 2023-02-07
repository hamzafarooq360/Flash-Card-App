import express, {Request, Response} from "express";
import mongoose, { models } from "mongoose"
import {config} from "dotenv";
config();
import Deck from "./models/Deck";
import cors from 'cors';
import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createCardforDeckController } from "./controllers/createCardforDeckController";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.post("/decks/:deckId/cards", createCardforDeckController)


mongoose.connect(
    process.env.MONGO_URL!
    )
    .then (() => {
        console.log(`listening on port ${PORT}`)
        app.listen(PORT)
    })

