let fullSurname = prompt("Напишите фамилию",'');
	
	//while (fullSurname === null || fullSurname === '' ) {
		while(!fullSurname){
		fullSurname = prompt("Введите данные корректно.Напишите фамилию", '');
 	}

	 let fullName = prompt("Напишите имя",'');
	
	 while ( !fullName){
		 fullName = prompt("Введите данные корректно.Напишите имя", '');
	  }
 
	  let patronymic = prompt("Напишите отчество",'');
	
	  while (!patronymic) {
		patronymic = prompt("Введите данные корректно.Напишите отчество", '');
	   }

let age = parseInt(prompt('Введите Ваш возраст:', ''));

    
	while (Number.isNaN(age) || age >= 150 || age <= 0) {
		age = parseInt(prompt("Пишите правильный возраст в цифрах", ));

	}
let gender = confirm('Ваш пол - мужской?') ? 'мужской':'женский';

if (((gender ==='мужской')&&(age >= 62))||((gender ==='женский')&&(age >= 58))) {
   let you_retired = "да";
} else { you_retired = "нет";}
alert("Ваше ФИО:"+"  " + fullSurname + " " + fullName + " "+patronymic + "\n" + "Ваш возраст в годах :" +" "+ age  + "\n" + "Ваш возраст в днях:" +" " +(age*365)  + "\n" + "Через 5 лет Вам будет:" + " " +(age+5)  + "\n" + "Ваш пол:" + " " + gender + "\n" + "Вы на пенсии:" +" " + you_retired);