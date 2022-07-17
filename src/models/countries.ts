import mongoose, { Schema } from "mongoose";

const countriesSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ascii: {
    type: String,
    required: true,
  },
  alt_name: {
    type: String,
    default: null,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  feat_class: {
    type: String,
    required: true,
  },
  feat_code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  cc2: {
    type: String,
    default: null,
  },
  admin1: {
    type: Number,
    default: null,
  },
  admin2: {
    type: Number,
    default: null,
  },
  admin3: {
    type: Number,
    default: null,
  },
  admin4: {
    type: Number,
    default: null,
  },
  population: {
    type: Number,
    default: 0,
  },
  elevation: {
    type: String,
    default: null,
  },
  dem: {
    type: Number,
    default: null,
  },
  tz: {
    type: String,
    default: null,
  },
  modified_at: {
    type: String,
    default: null,
  },
});

export default mongoose.model("Countries", countriesSchema);
