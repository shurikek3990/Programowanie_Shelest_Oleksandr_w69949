function task1(){
    let table1 = [];
    for (let i = 0; i < 10; i++) {
        let number1 = parseInt(prompt(`Give me the integer number ${i + 1}:`));
        table1.push(number1);
    }
    console.log(`Your table: ${table1}`)
    let findnumber = parseInt(prompt("What number would you like to find?"))
    let appeartimes = 0;
    for (let number1 of table1) {
    if (number1 === findnumber) {
        appeartimes++;
        }
    }
    console.log(`Number ${findnumber} has appeared ${appeartimes} times.`);
}
function task2(){
    let table2 = [1,2,3,4,5,6];
    number_to_add = parseInt(prompt("Give me the number to add:"))
    index_for_number = parseInt(prompt(`Give me index for the table ${table2} :`))
    table2.splice(index_for_number, 0, number_to_add);
    alert(`Your table now looks like this: ${table2}`)
}
function task3(){
    let table3 = [1,2,3,4,5,6];
    console.log(table3)
    let lengthtable = table3.length
    for(let i=5; i>=lengthtable/2; i--){
        pom=table3[i];
        table3[i]=table3[0]
        table3[lengthtable-1-i]=pom;
    }
    console.log(table3)
}
function task4(){
    table4len = parseInt(prompt("Give me the length of the table"))
    let randomArr = [];
    for (let i = 0; i < table4len; i++) {
        randomArr.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById("task4").innerHTML = randomArr;
}
function task5(){
    let table5 = [1,2,3,4,5,6,7,8,9]
    let sum = table5.reduce(function(a, b) { return a + b; }, 0);
    console.log(`Sum: ${sum}`)
    evens = table5.filter((num) => num % 2 === 0);
    console.log(`All even numbers: ${evens}`)
    multiplied = table5.map((num) => num*3);
    console.log(`Multiplied by 3: ${multiplied}`)
    const student_id = 12345;
    table5.push(student_id);
    const index_of_student_id = table5.indexOf(student_id);
    console.log("Index of student ID:", index_of_student_id);
    const average = sum / table5.length;
    console.log("Arithmetic mean:", average);
    const largest = Math.max(...table5);
    console.log("Largest number:", largest);
    const value_to_count = 30;0
    const occurrences = table5.filter((num) => num === value_to_count).length;
    console.log("Occurrences of", value_to_count, ":", occurrences);
}
function task6fib() {
    function task6fibseq(length){
        const fibArray = [0, 1];
        for (let i = 2; i < length; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }
        return fibArray;
    }
    const fib100 = task6fib(100);
    console.log("Pierwsze 100 liczb ciągu Fibonacciego:", fib100);
}
function task7(){
    function sumaDwochNajwiekszych(tablica) {
        if (tablica.length < 2) {
            console.error("Tablica musi zawierać przynajmniej dwie liczby.");
            return 0;
        }
        tablica.sort((a, b) => b - a);
        const suma = tablica[0] + tablica[1];
        return suma;
    }
    const mojaTablica = [5, 12, 8, 20, 3];
    const wynik = sumaDwochNajwiekszych(mojaTablica);
    console.log(`Suma dwóch największych liczb w tablicy wynosi: ${wynik}`);
}
function task8(){
    function removeDuplicates(array) {
        return array.filter((item, index) => array.indexOf(item) === index);
    }
    const myArray = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
    const uniqueArray = removeDuplicates(myArray);
    console.log("Unikalna tablica:", uniqueArray);
}
function task9(){
    function czyPierwsza(liczba) {
        if (liczba < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(liczba); i++) {
            if (liczba % i === 0) {
                return false;
            }
        }
        return true;
    }
    const mojaLiczba = 17;
    if (czyPierwsza(mojaLiczba)) {
        console.log(`Liczba ${mojaLiczba} jest pierwsza.`);
    } else {
        console.log(`Liczba ${mojaLiczba} nie jest pierwsza.`);
    }
}
function task10(){
    function odwrocKolejnoscSlow(zdanie) {
        const slowa = zdanie.split(' ');
        let odwroconeZdanie = '';
        for (let i = slowa.length - 1; i >= 0; i--) {
            odwroconeZdanie += slowa[i] + ' ';
        }
        return odwroconeZdanie.trim();
    }
    const zdanieWejsciowe = 'Now you`re gone. I realize my love for was strong';
    const odwroconeZdanie = odwrocKolejnoscSlow(zdanieWejsciowe);
    console.log(odwroconeZdanie);
}
function task11(){
    function generujLosoweHaslo2(dlugosc) {
        const losowyCiąg = Math.random().toString(36).slice(2);
        return losowyCiąg.slice(0, dlugosc);
    }
    const losoweHaslo2 = generujLosoweHaslo2(dlugoscHasla);
    console.log(losoweHaslo2);
}