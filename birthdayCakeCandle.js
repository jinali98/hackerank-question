function birthdayCakeCandles(candles) {
  const highestValue = Math.max(...candles);
  const times = candles.filter((el) => el === highestValue).length;

  return times;
}

birthdayCakeCandles([4, 4, 1, 3]);
