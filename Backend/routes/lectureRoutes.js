import express from "express";
import { createLecture, getLectures, joinLecture,updateLecture,deleteLecture } from "../controllers/lectureController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const lecturerouter = express.Router();
lecturerouter.get("/", protect, getLectures);
lecturerouter.post("/", protect, authorize("teacher"), createLecture);
lecturerouter.post("/:lectureId/join", protect, authorize("student"), joinLecture);
lecturerouter.post("/:lectureId/update",protect,authorize("teacher"), updateLecture);
lecturerouter.delete("/:lectureId/delete",protect,authorize("teacher"), deleteLecture);

export default lecturerouter;
