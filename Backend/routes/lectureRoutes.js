import express from "express";
import { createLecture, getLectures, joinLecture } from "../controllers/lectureController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getLectures);
router.post("/", protect, authorize("teacher"), createLecture);
router.post("/:lectureId/join", protect, authorize("student"), joinLecture);

export default router;
