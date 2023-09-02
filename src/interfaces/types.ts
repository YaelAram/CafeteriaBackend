export const Drink = {
  COLD: 0,
  HOT: 1,
} as const;

export const Temperature = {
  COLD: { $lte: 10 },
  MILD: { $gt: 10, $lt: 20 },
  HOT: { $gte: 20 },
} as const;

export const Age = {
  YOUNG: { $lt: 18 },
  ADULT: { $gte: 18, $lt: 60 },
  OLDER: { $gte: 60 },
} as const;
