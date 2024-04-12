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
