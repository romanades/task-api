import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;

    let completedFilter;
    if (completed === undefined) {
      completedFilter = undefined;
    } else {
      completedFilter = completed === 'true';
    }

    const tasks = await taskService.getAllTasks(completedFilter);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, completed } = req.body;
    const task = await taskService.createTask({ title, completed });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}