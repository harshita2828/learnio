const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const User = require("../Models/User");  // Assuming User model is here

dotenv.config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Set up multer to use memory storage (for Cloudinary upload)
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage
});

// Signup Route (with profile image upload)
router.post("/signup", upload.single("profileImage"), async (req, res) => {
    try {
        // Destructure user data from the request body
        const { firstName, lastName, userBio, userEmail, userMobile, userName, userPassword } = req.body;

        // Check if user already exists (either by email or mobile number)
        const existingUser = await User.findOne({ 
            $or: [{ userEmail }, { userMobile }] 
        });

        if (existingUser) {
            return res.status(401).send("User already exists with this email or mobile number. Please log in.");
        }

        // Ensure profile image is provided
        if (!req.file) {
            return res.status(400).json({ error: "No profile image provided." });
        }

        // Upload image directly to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.buffer, {
            resource_type: "auto",  // Automatically detect file type (image, video, etc.)
        });

        // Encrypt password before saving it
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(userPassword, salt);

        // Create a new user in the database
        const newUser = new User({
            firstName,
            lastName,
            userBio,
            userEmail,
            userMobile,
            userName,
            userPassword: encryptedPassword,
            profileImage: result.secure_url  // Store the image URL from Cloudinary
        });

        await newUser.save();

        // Return success response with user data
        return res.status(200).json({
            status: "Ok",
            user: newUser
        });
    } catch (error) {
        // Catch any errors and return a failure response
        res.status(400).json({ error: error.message });
        console.log(error);
    }
});

module.exports = router;
