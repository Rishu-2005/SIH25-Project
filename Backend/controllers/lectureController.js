import Lecture from "../models/Lecture.js";

export const createLecture = async (req,res)=>{
  const { title, description, scheduledAt } = req.body;
  const teacher = req.user._id;
  const lecture = await Lecture.create({ title, description, scheduledAt, teacher });
  res.status(201).json(lecture);
};

export const getLectures = async (req,res) => {
  const list = await Lecture.find().populate("teacher", "name email");
  res.json(list);
};

export const joinLecture = async (req,res) => {
  const { lectureId } = req.params;
  const lecture = await Lecture.findById(lectureId);
  if (!lecture) return res.status(404).json({ message: "Lecture not found" });
  if (!lecture.students.includes(req.user._id)) { lecture.students.push(req.user._id); await lecture.save(); }
  res.json(lecture);
};
