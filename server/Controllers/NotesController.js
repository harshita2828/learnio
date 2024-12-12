const express = require("express");
const dotenv = require("dotenv");
const Notes = require("../Models/Notes");
const multer = require("multer");
const path = require("path");

dotenv.config();

const storage = multer.diskStorage({
    destination: "./files",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

const uploadNote = async (req, res) => {
    try {
      const { title, description, tags, uploadedBy } = req.body;
      if (!req.file) {
        return res.status(400).json({ error: "File upload failed" });
      }
      const newFile = new Notes({
        fileName: title,
        fileDescription: description,
        tags: tags,
        files: req.file.filename,
        uploadedBy: uploadedBy,
      });
  
      await newFile.save();
      res.status(200).json({ message: "File uploaded successfully." });
    } catch (error) {
      res.status(400).json({ error: error.message });
      error;
    }
  };


const getNote = async (req, res) => {
  try {
    const { title, tag } = req.query;
    const query = {};

    if (title) {
      query.fileName = {
        $regex: title,
        $options: "i",
      };
    }

    if (tag) {
      query.tags = {
        $regex: tag,
        $options: "i",
      };
    }

    const data = await Notes.find(query);
    res.send({ data: data });
  } catch (error) {
    error;
  }
};

const getNoteByID = async (req, res) => {
  try {
    const userId = req.params.id;

    const data = await Notes.find({ uploadedBy: userId });
    if (!data || data.length === 0) {
      return res.status(404).send({ error: "No notes found for this user." });
    }

    res.send({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred while fetching the notes." });
  }
};

module.exports = { uploadNote, getNote, getNoteByID };
