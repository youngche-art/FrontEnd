function solution(want, number, discount) {
  let arr = [];
  for (let i = 0; i < want.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      arr.push(want[i]);
    }
  }

  let result = [];
  for (let i = 0; i <= discount.length - 10; i++) {
    let slice = discount.slice(i, i + 10);
    let isValid = true;
    let sliceCount = {};

    for (let item of slice) {
      sliceCount[item] = (sliceCount[item] || 0) + 1;
    }

    for (let item of arr) {
      if (!sliceCount[item] || sliceCount[item] === 0) {
        isValid = false;
        break;
      }
      sliceCount[item]--;
    }

    if (isValid) {
      result.push(i);
    }
  }

  return result;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
    3
  )
);
