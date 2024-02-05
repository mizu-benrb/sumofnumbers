const sumFor = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

const sumWhile = (list) => {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return i;
}

const sumRecursion = (list, i) => {
  if (i < 0) {
    return;
  }
  if (i === 0) {
    return list[i];
  }
  return list[i] + sumRecursion(list, i - 1);
}

const sumTheSimpleWay = (list) => {
  return _.reduce(list, (memo, num) => { return memo + num }, 0);
}

const testList = [1, 2, 3, 4, 5];
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList, testList.length - 1));
console.log(sumTheSimpleWay(testList));