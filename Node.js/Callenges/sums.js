/**
 * Sums
+===+
Time: 10 Minutes
Difficulty: Easy
+=======================+
Given an Integer n, show all possible sums of integers that result in n.
For instance, if n = 10 then the output should be

1+9 2+8   3+7
4+6 4+5+1 4+3+2+1

!HINT: RECUSRSION
Base condition of recursion:

if current_sum equals target
  print the output contents
 */

let getSumsRec = function (target, current_sum, start, result, output) {
  debugger;
  if (current_sum == target) {
    output.push(result.slice());
  }

  for (let i = start; i < target; i++) {
    let temp_sum = current_sum + i;
    if (temp_sum <= target) {
      result.push(i);
      getSumsRec(target, temp_sum, i, result, output);
    }
  }
};

let getSums = function (target) {
  let output = [];
  let result = [];
  getSumsRec(target, 0, 1, result, output);
  return output;
};

let num = 5;
let result = getSums(num);
console.log(result);
