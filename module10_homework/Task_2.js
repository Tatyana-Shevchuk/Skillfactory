const x = 890894;

switch (typeof x) {
  case 'number':
    console.log ('x - числовой тип данных')
    break;
  case 'string':
    console.log ('x - строковый тип данных')
    break;
  case 'boolean':
    console.log ('x - логический тип данных')
    break;
  default: 
    console.log ('Тип данных неопределен');
}