function task1() {
    class Book {
        constructor(title, author, year) {
            this.title = title;
            this.author = author;
            this.year = year;
        }
    }

    function bookInfo(book) {
        return `${book.title} - ${book.author} (${book.year})`;
    }

    const myBook = new Book("Ready Player One", "Ernset Cline", "2011");
    console.log(bookInfo(myBook));
}
function task2() {
    class Student {
        constructor(firstName, lastName, albumNumber, grades) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.albumNumber = albumNumber;
            this.grades = grades;
        }
    
        calculateAverageGrade() {
            const sumOfGrades = this.grades.reduce((acc, grade) => acc + grade, 0);
            const averageGrade = sumOfGrades / this.grades.length;
            return averageGrade;
        }
    }
    
    
    const student1 = new Student("Jan", "Kowalski", "12345", [4.5, 3.0, 5.0]);
    
    
    const averageGrade = student1.calculateAverageGrade();
    console.log(`Średnia ocen studenta ${student1.firstName} ${student1.lastName} (nr albumu ${student1.albumNumber}): ${averageGrade.toFixed(2)}`);
}
function task3(){
    class Trojkat {
        constructor(wysokosc, dlugoscPodstawy, nazwa) {
            this.wysokosc = wysokosc;
            this.dlugoscPodstawy = dlugoscPodstawy;
            this.nazwa = nazwa;
        }
    
        obliczPole() {
            return 0.5 * this.dlugoscPodstawy * this.wysokosc;
        }
    
        static porownajTrojkaty(trojkat1, trojkat2) {
            const pole1 = trojkat1.obliczPole();
            const pole2 = trojkat2.obliczPole();
            if (pole1 > pole2) {
                return trojkat1;
            } else if (pole2 > pole1) {
                return trojkat2;
            } else {
                return null;
            }
        }
    }
    
    const trojkatA = new Trojkat(5, 8, "Trójkąt A");
    const trojkatB = new Trojkat(4, 6, "Trójkąt B");
    const trojkatC = new Trojkat(7, 10, "Trójkąt C");
    
    console.log(`${trojkatA.nazwa} - pole: ${trojkatA.obliczPole()}`);
    console.log(`${trojkatB.nazwa} - pole: ${trojkatB.obliczPole()}`);
    console.log(`${trojkatC.nazwa} - pole: ${trojkatC.obliczPole()}`);
    
    const wiekszyTrojkat = Trojkat.porownajTrojkaty(trojkatA, trojkatB);
    if (wiekszyTrojkat) {
        console.log(`Trójkąt z większym polem: ${wiekszyTrojkat.nazwa}`);
    } else {
        console.log("Oba trójkąty mają takie samo pole.");
    }
}
function task4() {
    class Trapez {
        constructor(wysokosc, podstawa1, podstawa2, nazwa) {
            this.wysokosc = wysokosc;
            this.podstawa1 = podstawa1;
            this.podstawa2 = podstawa2;
            this.nazwa = nazwa;
        }
    
        obliczPole() {
            return 0.5 * (this.podstawa1 + this.podstawa2) * this.wysokosc;
        }
    
        zmienNazwe(nowaNazwa) {
            this.nazwa = nowaNazwa;
        }
    }
    const trapez1 = new Trapez(5, 8, 10, "Trapez A");
    const trapez2 = new Trapez(4, 6, 7, "Trapez B");
    const trapez3 = new Trapez(7, 10, 12, "Trapez C");
    console.log(`${trapez1.nazwa} - pole: ${trapez1.obliczPole()}`);
    console.log(`${trapez2.nazwa} - pole: ${trapez2.obliczPole()}`);
    console.log(`${trapez3.nazwa} - pole: ${trapez3.obliczPole()}`);
    trapez2.zmienNazwe("Nowy Trapez B");
    console.log(`Nowa nazwa Trapezu B: ${trapez2.nazwa}`);
}
function task5(){
    class Triangle {
        constructor(base, height) {
            this.base = base;
            this.height = height;
        }
        calculateArea() {
            return (this.base * this.height) / 2;
        }
    }
    class Trapezoid {
        constructor(base1, base2, height) {
            this.base1 = base1;
            this.base2 = base2;
            this.height = height;
        }
        calculateArea() {
            return ((this.base1 + this.base2) * this.height) / 2;
        }
    }
    const triangle = new Triangle(4, 6);
    const trapezoid = new Trapezoid(3, 4, 5);
    const triangleArea = triangle.calculateArea();
    const trapezoidArea = trapezoid.calculateArea();
    if (triangleArea > trapezoidArea) {
        console.log(`The triangle has a larger area: ${triangleArea}`);
    } else if (trapezoidArea > triangleArea) {
        console.log(`The trapezoid has a larger area: ${trapezoidArea}`);
    } else {
        console.log("Both figures have the same area.");
    }

}
function task6(){
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        calculateArea() {
            return this.width * this.height;
        }
        calculatePerimeter() {
            return 2 * (this.width + this.height);
        }
        // Check if the rectangle is a square
        isSquare() {
            return this.width === this.height;
        }
    }
    const widthInput = parseFloat(document.getElementById('widthInput').value);
    const heightInput = parseFloat(document.getElementById('heightInput').value);
    const rectangle = new Rectangle(widthInput, heightInput);
    const infoDiv = document.getElementById('rectangleInfo');
    infoDiv.innerHTML = `
                <p><strong>Rectangle Area:</strong> ${rectangle.calculateArea()}</p>
                <p><strong>Rectangle Perimeter:</strong> ${rectangle.calculatePerimeter()}</p>
                <p><strong>Is the rectangle a square?</strong> ${rectangle.isSquare() ? 'Yes' : 'No'}`
}
function task7(){
    class Car {
        constructor(make, model, year, color, maxSpeed) {
            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
            this.maxSpeed = maxSpeed;
            this.currentSpeed = 0;
        }

        accelerate(speedIncrement) {
            this.currentSpeed += speedIncrement;
            if (this.currentSpeed > this.maxSpeed) {
                this.currentSpeed = this.maxSpeed;
            }
        }
        decelerate(speedDecrement) {
            this.currentSpeed -= speedDecrement;
            if (this.currentSpeed < 0) {
                this.currentSpeed = 0;
            }
        }
        getInfo() {
            return `${this.make} ${this.model} (${this.year}), Kolor: ${this.color}, Prędkość: ${this.currentSpeed} km/h`;
        }
        getAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    
    // Przykład użycia:
    const myCar = new Car('Toyota', 'Camry', 2022, 'Niebieski', 200);
    myCar.accelerate(50);
    console.log(myCar.getInfo());
    console.log(`Wiek samochodu: ${myCar.getAge()} lat`);
    
}
function task8(){
    class BankAccount {
        constructor(accountNumber, balance) {
            this.accountNumber = accountNumber;
            this.balance = balance;
        }
    
        deposit(amount) {
            this.balance += amount;
        }
    
        withdraw(amount) {
            if (this.balance >= amount) {
                this.balance -= amount;
            } else {
                console.log("Insufficient balance");
            }
        }
    
        getBalance() {
            return this.balance;
        }
    }
    // Example usage:
    const myAccount = new BankAccount("BA1234", 500);
    console.log(`Initial balance: $${myAccount.getBalance()}`);
    myAccount.deposit(1000);
    console.log(`Balance after depositing $1000: $${myAccount.getBalance()}`);
    myAccount.withdraw(600);
    console.log(`Balance after withdrawing $600: $${myAccount.getBalance()}`);
}
