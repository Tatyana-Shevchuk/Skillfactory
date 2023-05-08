let arr = [1, 4, 0, NaN, "pop", 7, 9]; 
let newArr = []; 

for (i=0; i<arr.length; i++) {
  if (typeof arr[i] == "number") {
    newArr.push (arr[i]);
  }
}
let n=0;
let x=0;
let y=0;
let z=0;
for (i=0; i<newArr.length; i++) {
  if (isNaN (newArr[i])) {
    n++;
  } else if (newArr[i]%2 === 0 && newArr[i]!== 0) {
    x++;
  } else if (newArr[i]%2 !== 0) {
    y++;
  } else if (newArr[i] == 0) {
    z++;
  }
}
console.log (`В массиве ${x} четных, ${y} нечетных, ${z} нулей и ${n} неопределенных значений`);