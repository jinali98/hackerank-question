function plusMinus(arr = []) {
  const lengthOfTheArray = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((element) => {
    if (element > 0) positive++;
    if (element < 0) negative++;
    if (element === 0) zero++;
  });

  const positiveFraction = (positive / lengthOfTheArray).toPrecision(6);
  const negativeFraction = (negative / lengthOfTheArray).toPrecision(6);
  const zeroFraction = (zero / lengthOfTheArray).toPrecision(6);

  console.log(positiveFraction);
  console.log(negativeFraction);
  console.log(zeroFraction);
}

plusMinus([1, 1, 0, -1, -1]);
