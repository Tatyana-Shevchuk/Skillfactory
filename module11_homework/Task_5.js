const a = +prompt ('Введите число');
const b = +prompt ('Введите степень числа');
const sqrt = (a, b) => {
  const result = Math.pow (a,b);
  console.log (result);
}
sqrt(a, b)