// From: https://javascript.info/array-methods#tasks

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(string) {
   let removeDash = string.split("-");
   let result = removeDash.map(function(element , index) {
        if (index == 0) {
            return element;
        } else {
            return element.charAt(0).toUpperCase() + element.slice(1);
            
        }
        
   })
   return result.join('')
}

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.


function filterRange(arr, a, b) {
    return arr.filter(function(num) {
        return num >= a && num <= b;
    });
}


// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }        
    }
}

// Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// arr.sort(function(a, b) {
//     return b - a; 
// });

// Copy and sort array

function copySorted(array) {
    return array.slice().sort(function(a, b) {
        return a.localeCompare(b);
    });
    
}

// Shuffle an array

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Filter unique array members

function unique(arr) {
    return arr.filter(function(element, index, arr) {
        return arr.indexOf(element) === index;
    });
    
}

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((user => user.name));


// Map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     id: user.id,
//     fullName : user.name + " " + user.surname,
// }));

// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users) {
    users.sort((a, b) => {
        return a.age - b.age;
    });
    return users;
};

console.log(sortByAge(arr));