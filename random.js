var groupA = ['Diana','Loana','Laura','Hanipha'];
var groupB = ["James","Harry","Bruce","King"];
var places = ["London","Paris","Kigali"];
var rand = groupA[(Math.random() * groupA.length) | 0].concat(groupB[(Math.random() * groupB.length) | 0],places[(Math.random() * places.length) | 0])
console.log(rand);
