import Habit from '../models/Habits.js';

export const getHabits = async (req,res) => {
  const Habits = await Habit.find();
  res.json({ data: Habits, message: 'Habits los Habits' });
};

export const createHabit = async (req, res) => {
  const { description } = req.body;
  // handler Error

  const habit = await Habit.create({ description });

  res.json({ data: habit, message: 'Habit creado correctamente' });
};

export const updateHabit = async (req, res) => {
  const { id, isComplete } = req.body;

  const habit = await Habit.findByIdAndUpdate(id, { isComplete }, { new: true });

  res.json({ data: habit, message: 'Habit actualizado correctamente' });
};

export const deleteHabit = async (req, res) => {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.json({ data: [], message: 'Habit eliminado correctamente' });
};
