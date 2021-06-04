import Habit from '../models/Habits.js';

export const getHabits = async (req, res) => {
  const Habits = await Habit.find();
  res.json({ data: Habits, message: 'todos los Habits' });
};

export const createTodo = async (req, res) => {
  const { description } = req.body;
  //TODO: handler Error

  const todo = await Todo.create({ description });

  res.json({ data: todo, message: 'Todo creado correctamente' });
};

export const updateTodo = async (req, res) => {
  const { id, isComplete } = req.body;

  const todo = await Todo.findByIdAndUpdate(id, { isComplete }, { new: true });

  res.json({ data: todo, message: 'Todo actualizado correctamente' });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ data: [], message: 'Todo eliminado correctamente' });
};
