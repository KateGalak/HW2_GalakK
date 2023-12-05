// Reverce 
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("apple"));

//Palindrome
function palindrome(str) {
  const cleanStr = str.replace(/\s/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(palindrome("level"))
console.log(palindrome("Orange"))

//Extract even elements from arr --> reverce it 

function even(a) {
    let ar = [];

     for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) 
        ar.push(a[i]);
     }
    return ar.reverse();
}

let arr = [2, 5, 9, 12, 25, 30, 51, 66];

console.log (even(arr));