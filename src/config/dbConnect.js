import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Joaoquiles:Joao*090298@teste.inhczmx.mongodb.net/alura-node");

let db = mongoose.connection;
export default db