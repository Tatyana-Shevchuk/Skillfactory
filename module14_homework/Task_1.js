const parser = new DOMParser ();
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;
//создание пустого массива
result = {
    list: []
}
const xmlDOM = parser.parseFromString (xmlString, "text/xml");
const students = xmlDOM.querySelectorAll ("student");
//проход по всему массиву (в примере был for...of)
  students.forEach (students => {
  const name = students.querySelector("name");
  const firstName = name.querySelector ("first");
  const secondName = name.querySelector ("second");
  const lang = name.getAttribute ("lang");
  const age = students.querySelector ("age");
  const prof = students.querySelector ("prof");
  const studList = { 
    name: `${firstName.textContent} ${secondName.textContent}`,
    age: Number(age.textContent), 
    prof: prof.textContent, 
    lang: lang,
  }
  result.list.push (studList)
}); 
console.log (result)