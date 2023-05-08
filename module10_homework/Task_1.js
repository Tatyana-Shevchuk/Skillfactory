const value = +prompt ("Введите число");
if (isNaN(value)) {
  console.log ("Упс, кажется, вы ошиблись")
} else {
  switch ((typeof value) == "number") {
  case (value%2 == 0):
	console.log ("Число четное");
	break;
  case (value%2 
        != 0):
	console.log ("Число нечетное");
    break;
}
}