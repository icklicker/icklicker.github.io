let userName = prompt("Введите username", '');

if (userName == 'Admin') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Artem999') {
    alert( 'Go to https://transfiles.ru/gof5r' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Такого логина нет(" );
}