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
    
}