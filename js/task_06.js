var age = +prompt(`Введите возраст`);

if (age >= 1 && age <= 13) {
    alert(`Watch Peppa Pig`);
} else if (age >= 14 && age <= 17) {
    alert(`Watch Captain Marvel`);
} else if (age >=18 ) {
    alert(`Watch Melancholia`);
} else {
   
    alert(`Введите пожалуйста ваш реальный возраст`)
}                   