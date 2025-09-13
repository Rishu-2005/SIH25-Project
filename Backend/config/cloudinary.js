import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

import dotenv from "dotenv"; //ye nahi samajh aaraha ki kyun karna hai dubara already jab server.js mein kar rakkha hai top mein (silly mistake)
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = "lecture_materials";
    let resource_type = "auto"; // supports video, image, pdf, ppt, audio
    return {
      folder,
      resource_type,
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
    };
  },
});

export const upload = multer({ storage });
