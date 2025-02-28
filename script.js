// The user is prompted for froyo flavors upon entering the website.
const flavorString = prompt("Please enter a list of comma-separated froyo flavors: ",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

// The user's input string is split into an array of strings.
const flavors = flavorString.split(',');
flavors.sort(); //sort flavors to make counting easier later.
console.log(flavors);

/**
 * Takes an array and iterates through it to find unique keys and sets their value to the total amount of times they appear in the array. Returns an object populated with these key value pairs. 
 * @param {[]} arr 
 * @returns {{}} obj  
 */

function countFlavor(arr){
    const obj = {}; //initialize object
    let count = 1; //each unique key will appear at least once.
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            count++; //if key appears again in sequence increase count by one
        }
        else{
            obj[arr[i]] = count; //otherwise store key and value pair.
            count = 1; //reset count
        }
    }
    return obj;
}

//call function and print new object
const froyo = countFlavor(flavors);
console.table(froyo);