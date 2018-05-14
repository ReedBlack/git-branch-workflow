var petArray = [ 
  {
    name: "Reed",
    pets: ["Odin", "Holyfield"]
  },
  {
    name: "Peter",
    pets: ['Baxter', 'Resq']
  },
  {
    name: "JR",
    pets: ['Siren', 'Bear', 'Wolf']
  },
  {
    name: "Travis",
    pets: ['Gary', 'Ralph', 'Tommy']
  }
];

console.log(getPets(perArray))

function getPets(petOwners) {
  var result = [];
  for (var i=0;i < petOwners.length; i++) {
  //access the pet list
    var petList = petOwners[i].pets;
  // access each element of the pet list
    for (var j=0;j < petList.length; j++) {
  //push name to empty array
      result.push(petList[j])
    }
  }
  return result;
}
