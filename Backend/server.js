import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import lectureRoutes from "./routes/lectureRoutes.js";
// ... other route imports

dotenv.config();
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || "*", methods: ["GET","POST"] }
});

const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  "http://localhost:8081", // React Native default
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve local uploads in dev

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/lectures", lectureRoutes);
// ... material/chat/request routes

// Basic health
app.get("/api", (req,res)=>res.json({ ok: true }));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("Mongo connected"))
  .catch(err=>console.error(err));

// SOCKET.IO — minimal signaling & chat handlers
io.use((socket, next) => {
  // optional: verify JWT sent in handshake auth for secure sockets:
  const token = socket.handshake.auth?.token?.split(" ")[1]; // "Bearer <token>"
  if (!token) return next();
  try {
    const jwt = require("jsonwebtoken");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded; // { id, role, iat, exp }
    next();
  } catch (e) {
    next();
  }
});

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  socket.on("joinLecture", ({ lectureId, user }) => {
    socket.join(lectureId);
    // notify others
    socket.to(lectureId).emit("userJoined", { socketId: socket.id, user });
    // send list of other clients to this user (optional)
    const clients = Array.from(io.sockets.adapter.rooms.get(lectureId) || []);
    const others = clients.filter(id => id !== socket.id);
    socket.emit("allUsers", { users: others });
  });

  socket.on("sendMessage", ({ lectureId, message }) => {
    io.to(lectureId).emit("receiveMessage", message);
  });

  // WebRTC signaling
  socket.on("offer", ({ targetSocketId, callerSocketId, sdp }) => {
    io.to(targetSocketId).emit("offer", { callerSocketId, sdp });
  });
  socket.on("answer", ({ targetSocketId, sdp }) => {
    io.to(targetSocketId).emit("answer", { sdp, from: socket.id });
  });
  socket.on("ice-candidate", ({ targetSocketId, candidate }) => {
    io.to(targetSocketId).emit("ice-candidate", { candidate, from: socket.id });
  });

  socket.on("raiseHand", ({ lectureId, student }) => {
    io.to(lectureId).emit("handRaised", { student, socketId: socket.id });
  });

  socket.on("disconnect", () => {
    // inform rooms this socket was in
    socket.rooms.forEach(room => socket.to(room).emit("userLeft", { socketId: socket.id }));
    console.log("socket disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
