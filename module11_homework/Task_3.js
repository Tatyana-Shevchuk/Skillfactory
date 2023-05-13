function sum (arg1) {
    return function (arg2) {
     return arg1+arg2;
   }
 }
 
 const result = sum (7)(9);
 console.log (result);