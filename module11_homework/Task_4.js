const intervalID = setInterval (function (a,b) {
    for (let i = a; i <=b; i++) {
      console.log (i)
      clearInterval (intervalID);
}}, 1000, 15, 78);