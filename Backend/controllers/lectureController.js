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

  export const updateLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { title, description, scheduledAt, isLive } = req.body;

    const lecture = await Lecture.findById(lectureId);
    if (!lecture) return res.status(404).json({ message: "Lecture not found" });

    // if (lecture.teacher.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({ message: "Not authorized to update this lecture" });
    // }

    lecture.title = title || lecture.title;
    lecture.description = description || lecture.description;
    lecture.scheduledAt = scheduledAt || lecture.scheduledAt;
    lecture.isLive = typeof isLive === "boolean" ? isLive : lecture.isLive;

    await lecture.save();
    res.json(lecture);
  }catch (error) {
    res.status(500).json({ message: "Error updating lecture", error: error.message });
  }
};

export const deleteLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const lecture = await Lecture.findById(lectureId);
    if (!lecture) return res.status(404).json({ message: "Lecture not found" });

    // if (lecture.teacher.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({ message: "Not authorized to delete this lecture" });
    // }

    await lecture.deleteOne();
    res.json({ message: "Lecture deleted successfully" });
  }catch (error) {
    res.status(500).json({ message: "Error deleting lecture", error: error.message });
  }
};
