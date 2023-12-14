//створити 3 обʼєкти через {}

// Об'єкт з декількома властивосями 
let coolCar = {
    name: "Audi",
    qty: 10,
    batch: 10896,
    isQuality: true,
};

let bird = {
    name: "Leyla",
    type: "canary",
    "freadom bird": true 
  };

// Об'єкт з вкладеними об'єктами
let personInfo = {
    name: "Kateryna",
    lastName: "Galak",
    age: 27,
    job: {
        companyName: "VD",
        position: "QA",
    }

};

console.log(coolCar.batch)
console.log(bird["freadom bird"])
console.log(personInfo.job.position)

//створити 3 обʼєкти через Object()

// Спосіб 1- через конструктор Object
let dayWeek = new Object();
dayWeek.firstDay = "Monday";
dayWeek.secondDay = "Tuesday";
dayWeek.thirdDay = "Wednesday";
dayWeek.fourthDay = "Thusday";
dayWeek.fifthDay = "Friday";
dayWeek.saturday = 6;
dayWeek.sunday = 7;
dayWeek.isGood = true;

// Без new
let oscar = Object();
oscar.winner = "Brendan Fraizer";
oscar.year = 2023;
oscar.movie = "Whale"

// Створення об'єкта з вкладеними об'єктами
let car = new Object();
car.brand = "Audi";
car.model = "Q8";
car.year = 2020;
car.owner = new Object();
car.owner.name = "Olenka";
car.owner.age = 25;

console.log(dayWeek.isGood)
console.log(oscar.winner)
console.log(car.owner.age)


//3 //створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__)

let carBased = {
    engine: true,
    brakes: true,
    battery: true,
  };
  let carLuxe = {
    backSeat: true,
    childSeat: false,
    heater: true,
  };
  
  carLuxe.__proto__ = carBased; 
  
  console.log(carLuxe.engine); 
  console.log(carLuxe.childSeat); 

  //// 4) створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

  let engineer = {
    age:25,
    hair: "black",
    name: "Vasya",
    location: "Vinn",
  };
  let QA_engineer = {
    position: "junior",
    experiance: 1,
  };

  QA_engineer.__proto__ = engineer;

console.log("Engineer details:");
for (const key in engineer) {
  console.log(`${key}: ${engineer[key]}`);
}

console.log("QA engineer details:");
for (const key in QA_engineer) {
  console.log(`${key}: ${QA_engineer[key]}`);
}


// 5) унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let person = {
  gender: "male",
  'age person' : 33,
  role: "dev",
}

engineer.__proto__ = person

console.log("Person details:");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

 