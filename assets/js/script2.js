//define arrays that contain characters to generate passwords with

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"];
var specialChar = ["!","@","#","$","?","&","*"];


document.getElementById("alphanumeric").addEventListener("click",callback);

function callback(){

    generatePassWord(parseInt(document.getElementById("passwordcharacters").value), parseInt(document.getElementById("include-specials").value));
}


function generatePassWord(totalCharacters, NumSpecialChars) {
    //creating some variables to handle special character behaviour
    specialsIndex = NumSpecialChars;
    specialsPool = totalCharacters;
    console.log("SPECIALS");
    console.log(specialsIndex);
    console.log(totalCharacters);
    //creating some variables to handle number behaviour
    numberpoint1 = Math.floor(Math.random()*totalCharacters);
    numberpoint2 = Math.floor(Math.random()*totalCharacters);
    console.log("NUMBER POINTS");
    console.log(numberpoint1);
    console.log(numberpoint2);
    //create an empty array to populate with randomly generated characters
    var password = [];
    var passwordString = "";
    for (let i = 0; i < totalCharacters; i++) {
        //Create a random number for each type of array
        var randomAlphas = Math.floor(Math.random()*alphabet.length);
        var randomSpecials = Math.floor(Math.random()*specialChar.length);
        var randomNumbers = Math.floor(Math.random()*numbers.length);
        console.log("RANDOMNUMBERS");
        console.log(randomAlphas);
        console.log(randomSpecials);
        console.log(randomNumbers);


        //Choose some Selection rules that will create this password

        //Define how to incorperate chosen specials, choose a random number,
        //if this number is under the threshold set by specialsprobabilty, add a special character.
        specialsprobability = specialsIndex/specialsPool;
        console.log("specialProbabilty");
        console.log(specialsprobability);
        randomcheck = Math.random();
        console.log(randomcheck);
        if (specialsprobability > randomcheck){
            password[i] = specialChar[randomSpecials];
            //reduce the the specialsIndex by 1
            specialsIndex--;
            console.log("specials");
            console.log(password[i]);
            console.log(specialsIndex);
        } else if (i!==numberpoint1||i!==numberpoint2){
            password[i] = alphabet[randomAlphas];
        } else {
            password[i] = numbers[randomNumbers];
        }
        //reduces the total count for the specials ratio, 
        //Keeps the probabilty of a special showing up evenly distributed.
        specialsPool--;
        //Checks to make sure all specials are used, if not, overwrites last item with remaining special 
        if (i === totalCharacters-1 && specialsIndex !== 0){
            password[i] = specialChar[randomSpecials];
        }
        console.log("checkPassword");
        console.log(passwordString);
        passwordString = passwordString + password[i];
        console.log(passwordString);
        console.log("REPEAT");
    }
    document.getElementById("passphrase-output").innerHTML = passwordString;
}