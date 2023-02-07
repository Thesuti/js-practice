let animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "piranh"];

animals.forEach((element, index) =>{
    //element+="a";
    animals[index] = element+"a";
    //console.log(index);
});

console.log(animals);