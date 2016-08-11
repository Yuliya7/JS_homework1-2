var x = prompt('Введите число x');
var n = prompt('Введите степень n');

function pow(x, n) {
    var result = 1;
    for (var i = 0; i < Math.abs(n); i++){
        if (n < 0){
                result /= x;
        } else {
            result *= x;
        }
    }
  return result;
}
var result = pow(x, n);
console.log ('Результат вычислений= ', result); 
