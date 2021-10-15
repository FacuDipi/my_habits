import { Router } from 'express';
import {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit,
} from '../controllers/habit';

const router = Router();

//api/v1/Habit
router.get('/all', getHabits).put('/', updateHabit).post('/post', createHabit);

//api/v1/Habit/lakSJDFHLkajsdnñlakCNSlsdiufh
router.delete('/:id', deleteHabit);

export { router as habitRouter };
