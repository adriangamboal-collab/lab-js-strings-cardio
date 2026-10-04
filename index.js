/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";
console.log(string1.charAt(23));
// Your code here...




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";
const word = string2.charAt(2)+string2.charAt(11)+string2.charAt(11)+string2.charAt(10)
console.log(word);

// Your code here...




/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";
const chart = 'Batman';
console.log(string3.repeat(4)+" "+ chart);







/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

const fruitslice = (fruit.slice(0,6)+ " "+ fruit.slice(7,12))

console.log(fruitslice)
// Your code here...



/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";
const Word ='oxygen'

if (funnyHeadline1.includes(Word)){
    console.log("The funnyHeadline1 includes the word 'oxygen'");
    }
    else{
        console.log("The funnyHeadline1 does not include the word 'oxygen'")
    }
if (funnyHeadline2.includes(Word)){
    console.log("The funnyHeadline2 includes the word 'oxygen'");
    }
    else{
        console.log("The funnyHeadline2 does not include the word 'oxygen'")
    }


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";
// const length1 = string4.length+ " " +string4.charAt(16)
console.log(string4.length + " "+ string4.charAt(16))


// Me gustaria en el ultimo string dejar fijo el lenght -1 

// a) Print the string length
// Your code here ...


// b) Print the last character in the string
// Your code here ...

