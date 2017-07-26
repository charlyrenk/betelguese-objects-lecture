console.log("script.js has been sourced in")

// [name,favoriteAnimal]
var people = [
    ["Canin",'Uniflitten'],
    ["Charly",'Angler fish'],
    ["Bobby",'Liger'],
    ["Luke",'Killer Whale'],
];

console.log(people)

for (var i = 0; i < people.length; i++){
    var childPersonArray = people[i]
    console.log(childPersonArray[0]);

}
//log {person}'s favroite animal is the [favoriteAnimal]
//log for Canin: Canin's favorite animal is the Uniflitten