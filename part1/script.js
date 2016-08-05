function pow(x, n) {
var result = x;
for(var i = 1; i < n; i++){
result *= x;
}
return result;
}
var x = prompt("Введите число x", '');
var n = prompt("Введите целую степень n > 1", '');

if (n <= 1) {
	alert('Степень '+ n + 'не поддерживается, введите целую степень, большую 1');
} else {
	console.log(pow(x,n));
}
