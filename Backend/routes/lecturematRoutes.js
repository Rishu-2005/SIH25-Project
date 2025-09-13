import express from "express";
import { uploadMaterial, getLectureMaterials, deleteMaterial } from "../controllers/lecturematController.js";
import { upload } from "../config/cloudinary.js";
import { protect,authorize } from "../middleware/authMiddleware.js";

const lecturematrouter = express.Router();

lecturematrouter.post("/:lectureId", protect,authorize("teacher"), upload.single("file"), uploadMaterial);
lecturematrouter.get("/:lectureId", protect, getLectureMaterials);
lecturematrouter.delete("/material/:id", protect,authorize("teacher"), deleteMaterial);

export default lecturematrouter;
