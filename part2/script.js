var arr = ['Анна', 'Александр', 'Юлия', 'Евгений', 'Илья', 'Злата'];

for (var i = 0; i < arr.length; i++) {

	var enter = prompt ("Введите имя пользователя");

	if (arr.indexOf(enter) != -1) {
		alert(enter + ", Вы успешно вошли!");
	} 
	else {
		alert("Ошибка, введите Имя еще раз");
		console.log('Обновите страницу и введите Имя еще раз')
	}
	break;
}


