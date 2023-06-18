//1.
new Set([1,1,2,2,3,4])
//{1,2,3,4};

//2.
[...new Set("referee")].join("")
//ref

//3.
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{Array(3) => true}
//{Array(3) => false}

//4.
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

//from solution
//this checks to see that the arr is the same length when ran
let duplicate = arr => new Set(arr).size !== arr.length 

//5.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

//
function vowelCount (str) {
    const vowels = ['a','e','i','o','u'];
    let vowMap = new Map();
    let lowerCaseStr = str.toLowerCase();

    for (let ltr of lowerCaseStr) {
        if (vowels.includes(ltr)) {
            vowMap.set(ltr, (vowMap.get(ltr) || 0) + 1);
        }
    }
    return vowMap;
}