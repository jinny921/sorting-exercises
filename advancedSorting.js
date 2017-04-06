var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//sorts the above array first by the name ascending alphabetically
//in cases where the names are equal sort by descending age.

// students.sort(function(a, b) {

// });

students.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA > nameB) {
        return 1;
    } else if (nameA < nameB) {
        return -1;
    } else {
          return b.age - a.age;
    }
});

console.log(students);