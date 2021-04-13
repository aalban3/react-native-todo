const router = require("express").Router();
const { Todo } = require("../db");

// GET /todos
router.get("/", async (req, res, next) => {
  try {
    const people = await Todo.findAll();
    res.status(200).send(people);
  } catch (error) {
    next(error);
  }
});

// POST /todos
router.post("/", async (req, res, next) => {
  try {
    const person = await Todo.create(req.body);
    res.status(200).send(person);
  } catch (err) {
    next(err);
  }
});

// DELETE /todos
router.delete("/:todoId", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.todoId);
    await todo.destroy();
    res.status(200).send(todo);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
