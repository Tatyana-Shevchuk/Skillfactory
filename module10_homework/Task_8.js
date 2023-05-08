let map = new Map ();
map.set ("reason", "Birthday");
map.set ("Month", "May");
map.set ("date", 7);
map.set ("day", "Sunday");

map.forEach((value, key, map) => {
    console.log(`Ключ - ${key}, значение - ${value}`); 
});




/*
let map = new Map ();
map.set ("reason", "Birthday");
map.set ("Month", "May");
map.set ("date", 7);
map.set ("day", "Sunday");

for (let name of map.keys()); 
for (let value of map.values()) {
  console.log (`Ключ - ${name}, значение - ${value}`);
}


результат: 
"Ключ - JS Bin Output , значение - Birthday"
"Ключ - JS Bin Output , значение - May"
"Ключ - JS Bin Output , значение - 7"
"Ключ - JS Bin Output , значение - Sunday"
*/