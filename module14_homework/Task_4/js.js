const resultNode = document.querySelector ('.result');
const btnNode = document.querySelector ('.btn-req');


const useRequest = (width, height) => {
  return fetch (`https://dummyimage.com/${width}/${height}`)
      .then ((response) => {
        return response;
      })
      .catch (() => {
        console.log ('error')
      });
}



btnNode.addEventListener ('click', async () => {
  const width = document.querySelector ('.img-width').value;
  const height = document.querySelector ('.img-height').value;
  if ((width < 100 || width > 300) || (height <100 || height > 300)) {
      resultNode.innerHTML = '<p>Одно из чисел вне диапозона от 100 до 300</p>';  
  } else {
      const requestResult = await useRequest (width, height);
      console.log ('requestResult', requestResult);
      const image = document.createElement ('img');
      image.src = requestResult.url;
      resultNode.append(image);
  };
})

