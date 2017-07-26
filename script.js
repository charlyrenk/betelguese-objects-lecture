console.log("script.js has been sourced in")

// [name,favoriteAnimal]
var people = [
    {
        name: "Canin",
        favoriteAnimal: 'Uniflitten',
    },
    {
        name:"Charly",
        favoriteAnimal: 'Angler fish',
    },
    {
        name: "Bobby",
        favoriteAnimal: 'Liger',
    },
    {
        name: "Luke",
        favoriteAnimal: 'Killer Whale'
    },  
]


console.log(people)

for (var i = 0; i < people.length; i++){
    var childPersonArray = people[i]
    console.log(childPersonArray[0] + "'s favorite animal is the " + childPersonArray[1]);

};
//log {person}'s favroite animal is the [favoriteAnimal]
//log for Canin: Canin's favorite animal is the Uniflitten
