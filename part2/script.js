var arr = [];
for (var i = 0; i < 5; i++) { 
  arr[i] = prompt('Введите Ваше имя?', '');
}
var userName = prompt('Введите Имя пользователя?');

	if (arr.indexOf(userName) != -1) {
		alert(userName + ", Вы успешно вошли!");
	} 
	else {
		alert("Ошибка, введите Имя еще раз");
			}
console.log(arr);
console.log(userName);
console.log('Обновите страницу и введите "Имя пользователя" еще раз')

