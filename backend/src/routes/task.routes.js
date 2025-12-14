const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const {
  createTask,
  getAllTasks,
  updateTask,
  getUserTasks,
} = require("../controllers/task.controller");

router.post("/", auth, role("admin"), createTask);
router.get("/", auth, getAllTasks);
router.put("/:id", auth, updateTask);
router.get("/user/:id", auth, getUserTasks);

module.exports = router;