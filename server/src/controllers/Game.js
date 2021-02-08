import { getItemByKey, setItem } from '../services/db';
import SlotMachine from '../services/game/SlotMachine';

const SPIN_COST = 1;

export const SlotMachineController = (req, res) => {
  const { email } = req.user;

  const user = getItemByKey(email);

  user.points = user.points - SPIN_COST;

  if (user.points < 0) {
    res.status(400);
    return res.send('Run out of coins');
  }

  const slotMachine = new SlotMachine();

  const { point, result } = slotMachine.getSlotResult();

  user.points += point;

  setItem(user.email, user);

  res.send({ result, user: { points: user.points } });
};
