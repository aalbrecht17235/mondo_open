/* eslint-disable no-irregular-whitespace */
// import * as mongoose from 'mongoose';
import { Schema, model } from "mongoose";

const roundSchema = new Schema({
  number: { type: Number, required: true, unique: true },
  matches: [{ type: Schema.Types.ObjectId, ref: "Match" }]
});

export default model.call(require("mongoose"), "Round", roundSchema);