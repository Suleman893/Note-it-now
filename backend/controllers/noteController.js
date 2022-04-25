const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

// @desc    Get logged in user notes
// @route   GET /api/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  console.log("The req", req);
  const notes = await Note.find({user: req.user._id});
  res.json(notes);
});

//@description     Fetch single Note
//@route           GET /api/notes/:id
//@access          Public
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({message: "Note not found"});
  }
});

//@description     Create single Note
//@route           GET /api/notes/create
//@access          Private
const createNotes = asyncHandler(async (req, res) => {
  const {title, content, category} = req.body;
  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please fill all the field");
  } else {
    const note = new Note({user: req.user._id, title, content, category});
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  }
});

//@description     Delete single Note
//@route           GET /api/notes/:id
//@access          Private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant perform this action");
  }
  if (note) {
    await note.remove();
    res.json({message: "Note removed "});
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = asyncHandler(async (req, res) => {
  const {title, content, category} = req.body;
  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cant perform this action");
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;
    const updateNote = await note.save();
    res.json(updateNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

module.exports = {getNotes, createNotes, getNoteById, updateNote, deleteNote};
