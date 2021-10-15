import { NextFunction, Request, Response } from 'express';
import Habit from '../core/entities/Habits';

export const getHabits = async (req: Request,res: Response) => {
  const Habits = await Habit.find();
  res.json({ data: Habits, message: 'todos los Habits' });
};

export const createHabit = async (req: Request,res: Response)=> {
  const { description} = req.body;
  // handler Error

  const habit = await Habit.create({ description });

  res.json({ data: habit, message: 'Habit creado correctamente' });
};

export const updateHabit = async (req: Request,res: Response) => {
  const { id, isComplete } = req.body;

  const habit = await Habit.findByIdAndUpdate(id, { isComplete }, { new: true });

  res.json({ data: habit, message: 'Habit actualizado correctamente' });
};

export const deleteHabit = async (req: Request,res: Response) => {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.json({ data: [], message: 'Habit eliminado correctamente' });
};
