const router = require('express').Router();
const Task = require('../models/Task');
const auth = require('../middlewares/auth');

router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user_id: req.user.id }).sort('-createdAt');
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  const { title, description, dueDate, category } = req.body;
  try {
    const task = new Task({ title, description, dueDate, category, user_id: req.user.id });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  const { title, description, dueDate, category, completed } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    if (task.user_id != req.user.id) return res.status(401).send('Unauthorized');

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.category = category;
    task.completed = completed;
    await task.save();

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    if (task.user_id != req.user.id) return res.status(401).send('Unauthorized');

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
