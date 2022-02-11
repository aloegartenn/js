let weight = +prompt('Ваш вес (в кг)');

let height = +prompt('Ваш рост (в м)');

let index = weight / (height * height);
console.log(`${index}`);

if( index < 18.5){
    alert(`Дефицит массы тела:${index}`)
}
if((index > 18.5) && (index < 24.9) ){
    alert(`Нормальная масса тела:${index}`)
}
if((index > 24.9) && (index < 29.9) ){
    alert(`Избыточная масса тела (предожирение):${index}`)
}
if((index > 29.9) && (index < 34.9) ){
    alert(`Ожирение I степени:${index}`)
}
if((index > 34.9) && (index < 39.9) ){
    alert(`Ожирение II степени:${index}`)
}
if(index > 39.9  ){
    alert(`Ожирение III степени:${index}`)
}

