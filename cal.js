const num1 = parseInt(prompt('Enter first number: '));
const op = prompt('Enter operator ( either +, -, /,* and % ): ');
const num2 = parseFloat(prompt('Enter second number: '));
let result;
if (op == '+') {
    result = num1 + num2;
}
else if (op == '-') {
    result = num1 - num2;
}
  else if (op == '/') {
    result = num1 / num2;
}
else if (op == '*') {
    result = num1 * num2;
}
else {
    result = num1 % num2;
}
console.log(`${num1} ${op} ${num2} = ${result}`);
