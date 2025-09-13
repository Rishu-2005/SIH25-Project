import mongoose from "mongoose";

const LectureMatSchema = new mongoose.Schema({
  lecture: {type : mongoose.Schema.Types.ObjectId,ref:"Lecture",required:true},
  uploadedBy: {type : mongoose.Schema.Types.ObjectId,ref:"User",required:true},
  fileurl:{type:String,required:true},
  fileType:{type:String,required:true},
  uploadedAt:{type:Date,default:Date.now}
});

export default mongoose.model("LectureMaterial", LectureMatSchema);