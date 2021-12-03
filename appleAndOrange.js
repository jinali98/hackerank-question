function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesDistances = apples.map((each) => each + a);
  const orangeDistances = oranges.map((each) => each + b);

  const apple = [];
  const orange = [];
  applesDistances.forEach((each) => {
    if (each >= s && each <= t) {
      apple.push(each);
    }
  });
  orangeDistances.forEach((each) => {
    if (each >= s && each <= t) {
      orange.push(each);
    }
  });
  console.log(apple.length, orange.length);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
