import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: { type:String, required:true },
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User", required:true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  scheduledAt: Date,
  isLive: { type:Boolean, default:false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Lecture", lectureSchema);
