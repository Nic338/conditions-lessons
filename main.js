if (1 + 1 > 5){
    console.log("True fact!");
} else {
        console.log("LIES!")
    }
if (4 * 5 <= 20){
    console.log("True fact!");
} else {
    console.log("LIES!")
}
if (6 - 2 >= 0){
    console.log("True fact!");
} else {
    console.log("LIES!")
}

const likesDogs = true;

if (likesDogs === true){
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
}

const batman = {
    name: "Bruce Wayne",
    prefLanguage: "English",
}

if (batman.prefLanguage === "English") {
    console.log(`Hello ${batman.name}!`);
}   else if (batman.prefLanguage === "Spanish") {
    console.log(`Hola, ${batman.name}!`);
}   else if (batman.prefLanguage === "French") {
    console.log(`Bonjour, ${batman.name}!`);
}


const grade = 79;

if (grade >= 0, grade <= 69) {
    console.log("You got an F");
}   else if (grade >= 70 && grade <= 76) {
    console.log("You got a D");
}   else if (grade >= 77 && grade <= 84) {
    console.log("You got a C"); 
}   else if (grade >= 85 && grade <= 92) {
    console.log("You got a B");
}   else if (grade >= 93 && grade <= 100) {
    console.log("You got an A");
}