const db = require('../services/db');
const SlotMachine = require('../services/game/SlotMachine');

const SPIN_COST = 1;

exports.SlotMachine = (req, res) => {
  const { email } = req.user;

  const user = db.getItemByKey(email);

  user.points = user.points - SPIN_COST;

  if (user.points < 0) {
    res.status(400);
    return res.send('Run out of coins');
  }

  const slotMachine = new SlotMachine();

  const { point, result } = slotMachine.getSlotResult();

  user.points += point;

  res.send({ result, user: { points: user.points } });
};
