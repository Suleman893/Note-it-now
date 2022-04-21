const express = require("express");
const {getNotes} = require("../controllers/noteController");
const {createNotes} = require("../controllers/noteController");
const {getNoteById} = require("../controllers/noteController");
const {updateNote} = require("../controllers/noteController");
const {deleteNote} = require("../controllers/noteController");
const {protect} = require("../middlewares/authMiddleware");
const router = express.Router();
router.route("/").get(protect, getNotes);

router.route("/create").post(protect, createNotes);

router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);
module.exports = router;
