const person = {
    firstName: "Nikki",
    lastName: "Beaumont",
    age: 30,
    eyeColor: "pale blue"
  };

  console.log(person);
 
  const person2 = {
    firstName: "Milena",
    lastName: "Balac",
    id: 1975,
    eyes: "brown",
    fullName: function() {
        return this.firstName + " " + this.lastName + " has " + this.eyes + " eyes";
    }
};

console.log(person2.fullName());