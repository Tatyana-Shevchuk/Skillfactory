const resultNode = document.querySelector ('.result');
const btnNode = document.querySelector ('.btn-req');


const useRequest = (page, limit) => {
  return fetch (`http://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=${limit}`)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => { 
        return data;
    })
      .catch (() => {
        console.log ('error')
      });
}

function displayResult (apiData) {
  let cards = '';

  apiData.forEach (item => {
      const cardBlock = `
      <div class="card">
          <img src = '${item.url}' class="card-image" />
          <p>${item.title}</p>
      </div>
      `;
      cards += cardBlock;
  });

  resultNode.innerHTML = cards;
};


btnNode.addEventListener ('click', async () => {
  const page = Number(document.querySelector ('.page').value);
  const limit = Number(document.querySelector ('.lim').value);
  const checkPage = page >= 1 && page <= 10 || isNaN (page);
  const checkLimit = limit >= 1 && limit <= 10 || isNaN (limit);
                                               
  if (checkPage && checkLimit) {
      const requestResult = await useRequest (page, limit);
      displayResult (requestResult);
  } else if (checkPage) {
    resultNode.innerHTML = 'Номер страницы вне диапозона от 1 до 10';  
  } else if (checkLimit) {
      resultNode.innerHTML = 'Лимит вне диапозона от 1 до 10';
  } else {
    resultNode.innerHTML = 'Номер страницы и лимит вне диапозона от 1 до 10';
  } 
      
  
})

