// Task 2
function basic_math() {
    let a=10
    let b=20
    let c=23.2
    let maths= a+b+c + "=" + a + "+" + b + "+" + c
    alert(a+b+c)
    document.getElementById("wynikD").innerHTML = a+b+c
    document.getElementById("label1").innerHTML = maths 
}
// Task 4
function consolenum() {
    for (let i=0; i<=100; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// Task 5
function triangle_math() {
    let a=3
    let b=4
    let c=5
    let p=(a+b+c)/2
    let area= Math.sqrt(p*(p-a)*(p-b)*(p-c))
    document.getElementById("wynikD").innerHTML = "Is it a triangle?"
    let triangle_check = ((a+b)>c)&&((a+c)>b)&&((b+c)>a)
    if (triangle_check ){
        document.getElementById("label1").innerHTML = "It is indeed a triangle"
        document.getElementById("areaoftrig").innerHTML = "Area: " + area
    }
    else{
        document.getElementById("label1").innerHTML = "It is not a triangle, dummy"
        document.getElementById("areaoftrig").innerHTML = "Area: Null"
    }
}
//Task 3
function plus() {
    let a = 10;
    let b = 20;
    let c = 23.2;
    document.getElementById("wynikP").innerHTML = a+b+c;
}
function minus() {
    let a = 10;
    let b = 20;
    let c = 23.2;
    document.getElementById("wynikM").innerHTML = a-b-c;
}
function multiply() {
    let a = 10;
    let b = 20;
    let c = 23.2;
    document.getElementById("wynikMul").innerHTML = a*b*c;
}
function divide() {
    let a = 10;
    let b = 20;
    let c = 23.2;
    document.getElementById("wynikDiv").innerHTML = a/b/c;
}
// Task 6
function greeting(){
    nickname = prompt("What's your name?")
    alert("Hello " + nickname + "!");
}
// Task 7
function task7() {
    const liczba1 = parseInt(prompt("Enter the first:"));
    const liczba2 = parseInt(prompt("Enter the second:"));
    const suma = liczba1 + liczba2;
    document.getElementById("task7").innerHTML = "Sum of the two numbers: " + suma;
}
// Task 8
function task8() {
    const liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
    const liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
    const liczba3 = parseInt(prompt("Podaj trzecią liczbę całkowitą:"));
    const najwieksza = Math.max(liczba1, liczba2, liczba3);
    console.log("Max number is: " + najwieksza)
    document.getElementById("task8").innerHTML = "The maximum number is: " + najwieksza;
}
/* Task 9
function task9(numberI,numberII) {
    while (numberII !== 0) {
        const remainder = a % b;
        numberI = numberII;
        numberII = remainder;
    }
    return numberI;
}
const numberone = parseInt(prompt("Enter the first integer:"));
const numbertwo = parseInt(prompt("Enter the second integer:"));
const greatestCommonDivisor = task9(numberone, numbertwo)
alert("The greatest common divisor is: " + greatestCommonDivisor);
*/
// Task 10
function displayCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("time_display").innerHTML = `<p>Current time: ${time}</p>`;
}

setInterval(displayCurrentTime, 1000);