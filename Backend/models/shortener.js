import mongoose from "mongoose";
const shortenerSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, "Please add original url"],
    match: [
      /^https?:\/\/[\w-]+(\.[\w-]+)+([/?].*)?$/,
      "Please add a valid url",
    ],
  },
  requestUrl: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("shortener", shortenerSchema);
