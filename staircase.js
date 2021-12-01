function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const string = "#";
    const space = " ";
    if (i === n) console.log(string.repeat(i));
    if (i < n) console.log(space.repeat(n - i) + string.repeat(i));
  }
}
staircase(4);
