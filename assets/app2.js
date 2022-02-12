
 let year = +prompt("Введите год:");

 if (year % 400 < 1 ){
    alert("Год високосный")
 }
 
 else if(year % 100 < 1){
    alert("год не является високосным")
}

 else if (year % 4 < 1 ){
     alert("Год високосный")
 }


 
else{
    alert("год не является високосным")
}