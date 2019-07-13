var drinks = prompt(`Ваш любимый напиток`);

switch(drinks) {
    case 'coffee': alert(`Энергия на весь день`); break;
    case 'milk': ; alert(`ЗОЖ`); break;
    case `beer`: alert(`Алкаш`); break;
    case `vodka` : alert(`Балалайка`); break;
    default: alert(`Ты вообще человек?`);
}