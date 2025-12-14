const db = require("../config/db");

exports.createTask = async (req, res) => {
  const { title, description, assigned_to, due_date } = req.body;

  await db.query(
    "INSERT INTO tasks (title,description,assigned_to,due_date) VALUES (?,?,?,?)",
    [title, description, assigned_to, due_date]
  );

  res.json({ message: "Task created" });
};

exports.getAllTasks = async (req, res) => {
  const [tasks] = await db.query(`
    SELECT tasks.*, users.name AS assigned_name
    FROM tasks
    JOIN users ON tasks.assigned_to = users.id
  `);
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const { status } = req.body;
  await db.query("UPDATE tasks SET status=? WHERE id=?", [
    status,
    req.params.id,
  ]);
  res.json({ message: "Updated" });
};

exports.getUserTasks = async (req, res) => {
  const [tasks] = await db.query(
    "SELECT * FROM tasks WHERE assigned_to=?",
    [req.params.id]
  );
  res.json(tasks);
};