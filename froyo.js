
const userInputString = prompt(
    "Please enter the Froyo Flavors"
)

const flavors = userInputString.split(",");

const flavorcount = {};

flavors.forEach(function(flavor) {
    if (flavorcount[flavor]){
    flavorcount[flavor]++;
    }else {
        flavorcount[flavor] = 1; 
    }
});

console.log("froyo flavor count:");
console.log(flavorcount)
