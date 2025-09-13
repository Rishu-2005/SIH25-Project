import LectureMaterial from "../models/LectureMaterial.js";
import Lecture from "../models/Lecture.js";

//Upload material
export const uploadMaterial = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findById(lectureId);
    if (!lecture) return res.status(404).json({ message: "Lecture not found" });

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const material = await LectureMaterial.create({
      lecture: lectureId,
      uploadedBy: req.user._id,
      fileurl: req.file.path,      
      fileType: req.file.mimetype, 
    });

    res.status(201).json({ message: "File uploaded successfully", material });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get all materials for a lecture
export const getLectureMaterials = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const materials = await LectureMaterial.find({ lecture: lectureId })
      .populate("uploadedBy", "name email")
      .sort({ uploadedAt: -1 });
    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Delete material
export const deleteMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const material = await LectureMaterial.findById(id);
    if (!material) return res.status(404).json({ message: "Material not found" });

    if (material.uploadedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await material.deleteOne();
    res.json({ message: "Material deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
