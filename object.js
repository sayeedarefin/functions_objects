var sayeed = {
    name: "sayeed",
    occupation: "student",
    age : 25,
    relationshipType : "single"

}
console.log(sayeed);
console.log(sayeed.age);
//when you know the specific property name, use dot notation to get the property value
var ageCount = sayeed.age;
console.log(ageCount);
//alternative system

var ageCount2= sayeed['age'];
console.log(ageCount2);
