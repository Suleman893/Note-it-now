const express = require("express");
const {
  getNotes,
  createNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();
router.route("/note").get(protect, getNotes);
router.route("/create").post(protect, createNotes);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;
