const a=+prompt (`Введите число до 1000`);
if (a>1000) {
  console.log (`Внимание! Это число больше 1000. Введите число до 1000.`)
} else {
function simpleNumber(a) {
  if (a===1 || a===0) {
    return (`${a} не простое и не составное число.`);
  } else if (a>1) {
    for (i=2; i<a; i++) {
      if (a%i==0) {
      return (`${a} составное число`);
        }
    }
    return (`${a} простое число`);
  }
}
console.log(simpleNumber(a));
}