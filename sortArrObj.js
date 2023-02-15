// sorting array of objects

function sortArrObj(obj) {
  let sort = obj.sort(function (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    if (a.title == b.title) return 0;
  });
  return sort;
}
let arr=[{title:'v'},{title:'darr'}]
console.log(sortArrObj(arr))

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

const numberOfFlights = passengers.sort(
  (passenger1, passenger2) =>
    passenger1.connectedFlights -  passenger2.connectedFlights 
); 
console.log(numberOfFlights); // ascending oder to sort

const numberOfFlights1 = passengers.sort(
  (passenger1, passenger2) =>
    passenger2.connectedFlights -  passenger1.connectedFlights 
); 
console.log(numberOfFlights1); //descending oder to sort