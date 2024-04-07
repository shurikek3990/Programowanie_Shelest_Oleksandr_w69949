// a)
function NYcountdownA(n){
    let i ;
    for (i=n; i>0; i--){
        console.log(i);
    }
    if(i == 0){
        console.log("Happy New Year, BayBay")
    }
}
NYcountdownA()
//b)
function NYcountdownB(n){
    let i=n ;
    while(i>0) {
        i--;
        console.log(i);
    }
    if(i==0){console.log("Happy New Year, BAYBAY")
    }
}
NYcountdownB()


function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = prompt("Give me da numbah, brudda");
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);


 function jschlatt1999myway6peopledead() {
    age = prompt("What's your age, brudda?");
    if (age>=18) {
        alert("Welcome brudda!")
    }
    else{
        alert("No no no, brudda. You are going to kids site");
        window.open("https://www.youtube.com/watch?v=RgB87L1GZEk&ab_channel=PlayStation")

    }
 }
function task4(button) {
  const buttons = document.querySelectorAll('.fourth_task_btn');
  buttons.forEach(btn => {
      btn.style.backgroundColor = '';
  });
  button.style.backgroundColor = '#40b9fe5e';
}
function task5() {
  element = document.getElementById("main_title");
  element.style.display = (element.style.display === 'none') ? 'block' : 'none';
}
function task6() {
  let listText = document.getElementById("sixth_task_input").value;
  if (listText) {
      document.getElementById("sixth_task_list").innerHTML += 
          "<li>" +
              listText +
          "</li>"
      document.getElementById("sixth_task_input").value = '';
  }
}
function task7() {
  let cellName = document.getElementById("seventh_task_input_name").value;
  let cellSurname = document.getElementById("seventh_task_input_surname").value;
  if (cellName && cellSurname) {
      document.getElementById("seventh_task_table").innerHTML += 
          "<tr>" +
              "<td>" +
                  cellName +
              "</td>" +
              "<td>" +
                  cellSurname +
              "</td>" +
          "</tr>"
      document.getElementById("seventh_task_input_surname").value = '';
      document.getElementById("seventh_task_input_name").value = '';
  }
}
// Task 9
function gcd(a, b) {
  if (!b) {
      return a;
  }
  return gcd(b, a % b);
}

function calculateGCD() {
  const first_num = parseInt(document.getElementById('ninth_task_num_1').value);
  const second_num = parseInt(document.getElementById('ninth_task_num_2').value);
  document.getElementById('gcd_output').innerHTML = "NWD(" + 
  first_num + "; " + second_num + ") = " + gcd(first_num, second_num);
}
// Task 8
function CtF() {
  const celsius = parseFloat(document.getElementById('celsius_input').value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById('fahrenheit_output').textContent = fahrenheit + "°F";
}

function FtC() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit_input').value);
  const celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('celsius_output').textContent = celsius + "°C";
}