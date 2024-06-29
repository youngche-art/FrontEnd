function solution(ingredient) {
  let arr = [1, 2, 3, 1];
  let newArr = [];
  let answer = 0;
  for (let i = 0; i < ingredient; i++) {
    newArr = ingredient.slice(i, i + 4);
    if ((newArr = arr)) {
      answer++;
    }
  }
  return answer;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
