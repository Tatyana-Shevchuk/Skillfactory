const wsUri = 'wss://echo-ws-service.herokuapp.com';
const btnSend = document.querySelector ('.chat__input_btn'); 
const geoBtn = document.querySelector ('.geo_btn');
const chatArea = document.querySelector ('.chat__area_block');
const status = document.querySelector ('#geo_status');
const mapLink = document.querySelector ('#geo_map');

let websocket = new WebSocket(wsUri); // в переменную websocket, которую создали ранее, записывается результат вызова класса websocket с передаваемым соединением; его тоже объявили раньше (первой строкой); 

function writeToScreen (inText) {
  let res = document.createElement ("span"); 
  res.style.wordWrap = "break-word"; //требование стиля мягкого переноса
  res.innerHTML = inText;
  chatArea.appendChild(res);
}

btnSend.addEventListener ('click', () => {
  const inText = document.querySelector ('.chat__input_message').value;
  websocket.onmessage = function(evt) {
    writeToScreen ('<span class = "chat_area_res">Response: ' + evt.data + '</span>')
  }
  writeToScreen ("Sent: "+inText);
  websocket.send (inText); //отправка сообщения на сервер
});

//Геолокация 

//функция ошибки в получении данный 
const error = () => {
    status.textContent = 'Невозможно получить данные о местоположении';
  }
  //функция успешной геолокации
  const succes = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    websocket.send (position);
    mapLink.href = 'https://www.openstreetmap.org/#map=18/${lat}/${long}'
    mapLink.textContent = 'Геопозиция';
  }
  
  geoBtn.addEventListener ('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';
    
    if (!navigator.geolocation) {
      status.textContent = 'Геолокация не поддерживается вашим браузером';
    } else {
      navigator.geolocation.getCurrentPosition(succes, error);
    }
  });
