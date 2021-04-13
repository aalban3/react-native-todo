const router = require("express").Router();
const { Person } = require("../db");

// GET /person
router.get("/", async (req, res, next) => {
  try {
    const people = await Person.findAll();
    res.status(200).send(people);
  } catch (error) {
    next(error);
  }
});

// POST /person
router.post("/", async (req, res, next) => {
  try {
    const person = await Person.create(req.body);
    res.status(200).send(person);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
