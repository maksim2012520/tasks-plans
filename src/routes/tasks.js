const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Get all tasks
router.get('/', taskController.getAllTasks);

// Create a new task
router.post('/', taskController.createTask);

// Update an existing task
router.put('/:id', taskController.updateTask);

// Delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
