const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}  
`

//создание пустого массива
const result = {
    list: []
}

const data = JSON.parse(jsonString);

const list = data.list;

  list.forEach (item => {
  const studList = { 
    name: item.name, 
    age: Number(item.age), 
    prof: item.prof
  }
  result.list.push (studList)
}); 
console.log (result)