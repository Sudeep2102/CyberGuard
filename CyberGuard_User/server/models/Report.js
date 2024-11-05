// server/models/Report.js

import { Schema, model } from "mongoose";

const reportSchema = new Schema({
  dateTime: Date,
  state: String,
  district: String,
  platform: String,
  platformId: String,
  evidence: String, // File path will be stored here
  description: String,
  email: {
    type: String,
    required: true, // Make it required if necessary
    match: /.+\@.+\..+/ // Simple regex for email validation
  },
});

const Report = model("Report", reportSchema);

export default Report;
