import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const Deckschema = new Schema({
  title: String,
  cards: [String],
});

const DeckModel = mongoose.model("Deck", Deckschema)

export default DeckModel;