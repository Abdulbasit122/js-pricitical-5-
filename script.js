// Task 1
let str1 = prompt("Enter a string:");
let index1 = parseInt(prompt("Enter an index:"));
if (index1 >= 0 && index1 < str1.length) {
  alert("The character at index " + index1 + " is: " + str1.charAt(index1));
} else {
  alert("Index out of range.");
}

// Task 2
let str2 = prompt("Enter a string:");
let searchStr = prompt("Enter the substring to search for:");
let replaceStr = prompt("Enter the replacement substring:");
let modifiedStr = str2.replace(new RegExp(searchStr, "g"), replaceStr);
alert("The modified string is: " + modifiedStr);

// Task 3
let num3 = parseFloat(prompt("Enter a number:"));
let roundedNum = Math.round(num3);
alert("The rounded number is: " + roundedNum);

// Task 4
let num4 = parseFloat(prompt("Enter a number:"));
let ceilingNum = Math.ceil(num4);
alert("The ceiling of the number is: " + ceilingNum);

// Task 5
let num5 = parseFloat(prompt("Enter a number:"));
let floorNum = Math.floor(num5);
alert("The flooring of the number is: " + floorNum);
