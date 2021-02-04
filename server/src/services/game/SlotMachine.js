const get = require('lodash.get');

const APPLE = 'apple';
const BANANA = 'banana';
const CHERRY = 'cherry';
const LEMON = 'lemon';

const POINTS = {
  [APPLE]: {
    2: 10,
    3: 20,
  },
  [BANANA]: {
    2: 5,
    3: 15,
  },
  [CHERRY]: {
    2: 40,
    3: 50,
  },
  [LEMON]: {
    3: 3,
  },
};

const REELS = [
  [CHERRY, LEMON, APPLE, LEMON, BANANA, BANANA, LEMON, LEMON],
  [LEMON, APPLE, LEMON, LEMON, CHERRY, APPLE, BANANA, LEMON],
  [LEMON, APPLE, LEMON, APPLE, CHERRY, LEMON, BANANA, LEMON],
];

class SlotMachine {
  constructor(reels, points) {
    this.reels = reels || REELS;
    this.points = points || POINTS;
  }

  /**
   * Returns with point of the spin.
   *
   * It's only works properly for 3 element.
   *
   * @param {[]} result - Array of ICONS
   * @return {number}
   */
  getPoint = (result) => {
    const iconPoints = result.reduce((acc, icon, idx, reel) => {
      if (idx === 0) {
        return { [icon]: 1 };
      }

      const prevIcon = reel[idx - 1];
      const isMatched = prevIcon === icon;

      return {
        ...acc,
        [icon]: isMatched ? acc[icon] + 1 : 1,
      };
    }, {});

    const validPoints = Object.entries(iconPoints).filter(
      ([_, count]) => count > 1
    );

    const [icon, count] = validPoints[0] || [];

    return get(this.points, [icon, count], 0);
  };

  /**
   * Returs with random integer between 0 and max - 1
   *
   * @param {number} max
   * @return {number}
   */
  getReelPosition = (max) => Math.floor(Math.random() * (max - 1));

  /**
   * Returns with point of spin and spin result array.
   *
   * @return {Object}
   */
  getSlotResult = () => {
    const result = this.spinReels();
    const point = this.getPoint(result);

    return {
      point,
      result,
    };
  };

  /**
   * Returns with random spin of reels.
   *
   * @return {Array}
   */
  spinReels = () =>
    this.reels.reduce(
      (acc, reel) => [...acc, reel[this.getReelPosition(reel.length)]],
      []
    );
}

module.exports = SlotMachine;
