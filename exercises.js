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

let arr = [5, 2, 1, -10, 8];

arr.sort(function(a, b) {
    return b - a; 
});

// Copy and sort array

function copySorted(array) {
    return array.slice().sort(function(a, b) {
        return a.localeCompare(b);
    });
    
}